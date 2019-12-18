import env from "./env.json"

let mailerURL = "https://mailer.dgbanking.com/send"
// let mailerURL = 'https://staging-mailer.dgbanking.com/send';
// switch (env.env) {
//     case 'production':
//         mailerURL = 'http://mailer.dgbanking.com/send';
//         break;
//     default:
// }

export const mailerEndpoint = mailerURL
