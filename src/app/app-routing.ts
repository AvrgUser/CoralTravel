import { RouterModule, Routes } from "@angular/router";
import { AdminPanelComponent } from "./page/admin-panel/admin-panel.component";
import { LoginComponent } from "./page/login/loginPanel.component";

const appRoutes: Routes = [
    {   path: 'LoginComponent', component: LoginComponent},
    {   path: 'AdminPanelComponent', component: AdminPanelComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);