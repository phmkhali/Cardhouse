import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

import serviceAccount from '@/service-account-key.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

export const firestore = admin.firestore();
export const auth = admin.auth();
