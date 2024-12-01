export interface Dockitt {
    id: number,
    task: string,
    status: string,
    priority: string,
    tag: string,
    description: string
}

export interface Note {
    id: number,
    created_at: string,
    author: string
    message: string
}