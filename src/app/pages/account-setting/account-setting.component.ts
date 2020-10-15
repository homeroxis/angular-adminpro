import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
    selector: 'app-account-setting',
    templateUrl: './account-setting.component.html',
    styles: []
})
export class AccountSettingComponent implements OnInit {
    constructor(private SettingsService: SettingsService) {}

    ngOnInit(): void {
        this.SettingsService.checkCurrentTheme();
    }

    changeTheme(theme: string) {
        this.SettingsService.changeTheme(theme);
    }
}
// selector.classList.remove('working');

//         selector.classList.add('working');
