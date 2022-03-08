import React from 'react'
import authService from '../components/api-authorization/AuthorizeService'

export default class getUserAuth {
    
    static async isThisLoged() {
        const authenticated = await authService.isAuthenticated();
        return (authenticated)
    }
    
    
}
