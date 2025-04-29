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
                name: 'Nombre Comic',
                price: 10.99,
                description: 'Descripción Comic',
                img: 'comic.jpg'
            },
            {
                id: 2,
                editor_id: 1,
                name: 'Nombre Comic',
                price: 10.99,
                description: 'Descripción Comic',
                img: 'comic.jpg'
            },
            {
                id: 3,
                editor_id: 1,
                name: 'Nombre Comic',
                price: 10.99,
                description: 'Descripción Comic',
                img: 'comic.jpg'
            },
            {
                id: 4,
                editor_id: 1,
                name: 'Nombre Comic',
                price: 10.99,
                description: 'Descripción Comic',
                img: 'comic.jpg'
            },
            {
                id: 5,
                editor_id: 2,
                name: 'Nombre Comic',
                price: 10.99,
                description: 'Descripción Comic',
                img: 'comic.jpg'
            },
            {
                id: 6,
                editor_id: 3,
                name: 'Nombre Comic',
                price: 10.99,
                description: 'Descripción Comic',
                img: 'comic.jpg'
            },
            {
                id: 7,
                editor_id: 3,
                name: 'Nombre Comic',
                price: 10.99,
                description: 'Descripción Comic',
                img: 'comic.jpg'
            },
            {
                id: 8,
                editor_id: 4,
                name: 'Nombre Comic',
                price: 10.99,
                description: 'Descripción Comic',
                img: 'comic.jpg'
            },
            {
                id: 9,
                editor_id: 4,
                name: 'Nombre Comic',
                price: 10.99,
                description: 'Descripción Comic',
                img: 'comic.jpg'
            },
            {
                id: 10,
                editor_id: 4,
                name: 'Nombre Comic',
                price: 10.99,
                description: 'Descripción Comic',
                img: 'comic.jpg'
            },
            {
                id: 11,
                editor_id: 4,
                name: 'Nombre Comic',
                price: 10.99,
                description: 'Descripción Comic',
                img: 'comic.jpg'
            }
        ];
        return { comics};
    }
}