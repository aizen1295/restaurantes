import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyD_RoEjL3n6e1dKYxNBBDuJPtd77Fn-1W0',
	authDomain: 'restaurants-api-4a1be.firebaseapp.com',
	projectId: 'restaurants-api-4a1be',
	storageBucket: 'restaurants-api-4a1be.appspot.com',
	messagingSenderId: '583511752696',
	appId: '1:583511752696:web:bc6fa698226665f748600d',
	measurementId: 'G-EXE6RJV5FZ',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
