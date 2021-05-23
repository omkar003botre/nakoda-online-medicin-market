    const firebaseConfig = {
        apiKey: "AIzaSyB11sXyyCIhEsmK7PY35KCiWaR81UKyP3A",
        authDomain: "kalpesh-babbb.firebaseapp.com",
        projectId: "kalpesh-babbb",
        storageBucket: "kalpesh-babbb.appspot.com",
        messagingSenderId: "726969251447",
        appId: "1:726969251447:web:d18fc3680f2f82f8457872"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    db.settings({
        timestampsInSnapshots: true
    });
    const form = document.querySelector('#fo');
    // saving data
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('buying').add({
            product: form.product.value,
            name: form.name.value,
            phno: form.phno.value,
            address: form.address.value,
        });

        form.product.value = '';
        form.name.value = '';
        form.phno.value = '';
        form.address.value = '';
    });