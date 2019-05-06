import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children:
        [
            {
                path: 'home',
                children:
                [
                    {
                    path: '',
                    loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'search-ride',
                children:
                [
                    {
                    path: '',
                    loadChildren: '../search-ride/search-ride.module#SearchRidePageModule'
                    }
                ]
            },
            {
                path: 'offer-ride',
                children:
                [
                    {
                    path: '',
                    loadChildren: '../offer-ride/offer-ride.module#OfferRidePageModule'
                    }
                ]
            },
            {
                path: 'message',
                children:
                [
                    {
                    path: '',
                    loadChildren: '../message/message.module#MessagePageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children:
                [
                    {
                    path: '',
                    loadChildren: '../profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports:
    [
        RouterModule.forChild(routes)
    ],
    exports:
    [
        RouterModule
    ]
})
export class TabsPageRoutingModule {}