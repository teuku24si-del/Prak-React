import axios from 'axios'

const API_URL = "https://copazoppxtdvrinfwzpg.supabase.co/rest/v1/note"
const API_KEY = "sb_publishable_P1I_Vkusue4JarE8MIgtdg_JbsrjQjr"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    }
}