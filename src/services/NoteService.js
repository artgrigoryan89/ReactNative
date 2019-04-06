import BaseFirebaseService from './BaseFirebaseService';

export class NoteService extends BaseFirebaseService {

    constructor(id) {
        super('note/' +id)
    }
}
