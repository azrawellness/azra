import * as firebaseAdmin from 'firebase-admin'
const { privateKey } = JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY)

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey,
      clientEmail: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
  })
}

export { firebaseAdmin }
