import { config } from 'dotenv'
config()

export const env = {
    DatabaseConnectionString: process.env.DatabaseConnectionString,
    DatabaseConnectionPort: process.env.DatabaseConnectionPort,
    DatabaseName: process.env.DatabaseName
}