export const APP_URL = process.env.APP_URL as string

export const PUBLIC_URL = {
    root: (url = '') => `${url ? url: ''}`,

    home: () => PUBLIC_URL.root('/'),
    auth: () => PUBLIC_URL.root('/auth'),
}

export const DASHBOARD_URL = {
    root: (url = '') => `${url ? url: ''}`,

    home: () => DASHBOARD_URL.root('/dashboard'),
}

export const ADMIN_URL = 'http://localhost:5173'