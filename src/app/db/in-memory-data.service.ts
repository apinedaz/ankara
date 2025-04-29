import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService
{
    createDb()
    {
        const comics = [
            {
                id: 1,
                editor_id: 1,
                name: 'Nombre Comic 1',
                price: 10.99,
                description: 'Descripción Comic 1',
                img: 'comic.jpg'
            },
            {
                id: 2,
                editor_id: 1,
                name: 'Nombre Comic 2',
                price: 10.99,
                description: 'Descripción Comic 2',
                img: 'comic.jpg'
            },
            {
                id: 3,
                editor_id: 1,
                name: 'Nombre Comic 3',
                price: 10.99,
                description: 'Descripción Comic 3',
                img: 'comic.jpg'
            },
            {
                id: 4,
                editor_id: 1,
                name: 'Nombre Comic 4',
                price: 10.99,
                description: 'Descripción Comic 4',
                img: 'comic.jpg'
            },
            {
                id: 5,
                editor_id: 2,
                name: 'Nombre Comic 5',
                price: 10.99,
                description: 'Descripción Comic 5',
                img: 'comic.jpg'
            },
            {
                id: 6,
                editor_id: 3,
                name: 'Nombre Comic 6',
                price: 10.99,
                description: 'Descripción Comic 6',
                img: 'comic.jpg'
            },
            {
                id: 7,
                editor_id: 3,
                name: 'Nombre Comic 7',
                price: 10.99,
                description: 'Descripción Comic 7',
                img: 'comic.jpg'
            },
            {
                id: 8,
                editor_id: 4,
                name: 'Nombre Comic 8',
                price: 10.99,
                description: 'Descripción Comic 8',
                img: 'comic.jpg'
            },
            {
                id: 9,
                editor_id: 4,
                name: 'Nombre Comic 9',
                price: 10.99,
                description: 'Descripción Comic 9',
                img: 'comic.jpg'
            },
            {
                id: 10,
                editor_id: 4,
                name: 'Nombre Comic 10',
                price: 10.99,
                description: 'Descripción Comic 10',
                img: 'comic.jpg'
            },
            {
                id: 11,
                editor_id: 4,
                name: 'Nombre Comic 11',
                price: 10.99,
                description: 'Descripción Comic 11',
                img: 'comic.jpg'
            }
        ];

        const editors = [
            {
                id: 1,
                name: "Editor 1"
            },
            {
                id: 2,
                name: "Editor 2"
            },
            {
                id: 3,
                name: "Editor 3"
            },
            {
                id: 4,
                name: "Editor 4"
            },
            {
                id: 5,
                name: "Editor 5"
            }
        ];

        const options = [
            {
                name: 'Usuarios',
                url: 'users'
            },
            {
                name: 'Editores',
                url: 'editors'
            },
            {
                name: 'Contactanos',
                url: 'contact'
            }
        ];

        const users = [
            {
                id:1,
                Usuario:'admin',
                Nombre:'administrador',
                Correo:'afpineda1@poligran.edu.co',
                Telefono:'313 439 37 43'
            }
        ]
        return { comics, editors, options, users };
    }
}