import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { ModalImagenService } from '../../services/modal-imagen.service';

@Component({
    selector: 'app-modal-imagen',
    templateUrl: './modal-imagen.component.html',
    styles: []
})
export class ModalImagenComponent implements OnInit {
    public imagenSubir: File;
    public imgTemp: any = null;
    public usuario: Usuario;

    constructor(
        public modalImagenService: ModalImagenService,
        public usuarioService: UsuarioService,
        public fileUploadService: FileUploadService
    ) {
        this.usuario = usuarioService.usuario;
    }

    ngOnInit(): void {}

    cerrarModal() {
        this.imgTemp = null;
        this.modalImagenService.cerrarModal();
    }

    cambiarImagen(file: File) {
        console.log(file);
        this.imagenSubir = file;

        if (!file) {
            return (this.imgTemp = null);
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            this.imgTemp = reader.result;
        };
    }

    subirImagen() {
        const id = this.modalImagenService.id;
        const tipo = this.modalImagenService.tipo;

        this.fileUploadService
            .actualizarFoto(this.imagenSubir, tipo, id)
            .then(img => {
                Swal.fire('Guardado', 'Imagen de usuario actualizada', 'success');
                this.modalImagenService.nuevaImagen.emit(img);
                this.cerrarModal();
            })
            .catch(err => {
                console.log(err);
                Swal.fire('Error', 'No se pudo subir la iimagen', 'error');
            });
    }
}