import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styles: []
})
export class PerfilComponent implements OnInit {
    public perfilForm: FormGroup;
    public usuario: Usuario;
    public imagenSubir: File;
    public imgTemp: any = null;

    constructor(
        private fb: FormBuilder,
        private usuarioService: UsuarioService,
        private fileUploadService: FileUploadService
    ) {
        this.usuario = usuarioService.usuario;
    }

    ngOnInit(): void {
        this.perfilForm = this.fb.group({
            nombre: [this.usuario.nombre, Validators.required],
            email: [this.usuario.email, [Validators.required, Validators.email]]
        });
    }

    actualizarPerfil() {
        console.log(this.perfilForm.value);
        this.usuarioService.actualizarPerfil(this.perfilForm.value).subscribe(
            resp => {
                const { nombre, email } = this.perfilForm.value;
                this.usuario.nombre = nombre;
                this.usuario.email = email;
                Swal.fire({
                    icon: 'success',
                    title: 'Perfil actualizado',
                    text: 'Has realizado los cambios exitósamente'
                });
            },
            err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    text: err.error.msg
                });
            }
        );
    }

    cambiarImagen(file: File) {
        this.imagenSubir = file;

        if (!file) {
            return (this.imgTemp = null);
        }
        // if (!this.imagenSubir.type.includes('image/')) {
        //     this.imgTemp = null;
        //     this.imagenSubir = null;
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Error',
        //         text: 'Extensión de archivo no válida'
        //     });
        //     return;
        // }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            this.imgTemp = reader.result;
        };
    }

    subirImagen() {
        this.fileUploadService
            .actualizarFoto(this.imagenSubir, 'usuarios', this.usuario.uid)
            .then(img => (this.usuario.img = img));
        Swal.fire({
            icon: 'success',
            title: 'Imagen actualizada',
            text: 'Cambiaste tu imagen exitósamente'
        }).catch(err => {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Extensión de archivo no válida',
            //     text: err.error.msg
            // });
            console.log(err);
        });
    }
}
