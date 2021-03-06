/* esercizio boolzap
Milestone 1 
Replica della grafica c on l a possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della l ista contatti: t ramite l a direttiva v-for, visualizzare
nome e i mmagine di ogni contatto */

/* Milestone 2
 Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
 Click sul contatto mostra la conversazione del contatto cliccato*/

 /* Milestone 3
 Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
 Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo. 
 I messaggi devono essere generati solo nella chat attiva in quel momento*/

 /* Milestone 4
  Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite*/

/* andiamo a richiamare il contenitore per collegarlo a vue */

var container = new Vue (

    {
        el: "#mainPart",

        data: {

            /* creiamo una variabile settata a 0 per starmpare solo il primo elemento nella pagina che poi andrà cambiato */

            chatActive: 0,

            /* creiamo un'array di oggetti per stampare le icone e successivamente (nelle future mlestone) i vari messaggi in base all'utente selezionato */

            contacts: [

                {
                    userName: "Michele",
                    profileImage: "img/avatar_1.jpg",
                    visible: true,
                    messages: [

                        {
                            date: "10/01/2020 15:30:55",
                            text: "Hai portato a spasso il cane?",
                            status: "sent",
                            miniBox: false
                        },

                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent",
                            miniBox: false
                        },

                        {
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received",
                            miniBox: false
                        }

                    ],
                },

                {
                    userName: "Fabio",
                    profileImage: "img/avatar_2.jpg",
                    visible: true,
                    messages: [

                        {
                            date: "20/03/2020 16:30:55",
                            text: "Ciao come stai?",
                            status: "sent",
                            miniBox: false
                        },

                        {
                            date: "20/03/2020 16:30:55",
                            text: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                            miniBox: false
                        },

                        {
                            date: "20/03/2020 16:35:00",
                            text: "Mi piacerebbe ma devo andare a fare la spesa",
                            status: "sent",
                            miniBox: false
                        }

                    ],
                },

                {
                    userName: "Samuele",
                    profileImage: "img/avatar_3.jpg",
                    visible: true,
                    messages: [

                        {
                            date: "28/03/2020 10:10:40",
                            text: "La Marianna va in campagna",
                            status: "received",
                            miniBox: false
                        },

                        {
                            date: "28/03/2020 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                            miniBox: false
                        },

                        {
                            date: "28/03/2020 16:15:22",
                            text: "Ah scusa!",
                            status: "received",
                            miniBox: false
                        }

                    ],
                },

                {
                    userName: "Luisa",
                    profileImage: "img/avatar_4.jpg",
                    visible: true,
                    messages: [

                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                            miniBox: false
                        },

                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                            miniBox: false
                        }

                    ],
                }

            ],

            /* creiamo due nuovi oggetti per far scrivere il messaggio all'utente e avere una risposta dal computer */

            newMessage: {

                date: "10/01/2020 15:57:00",
                text: "",
                status: "sent"

            },

            newAnswer: {
                
                date: "10/01/2020 15:58:00",
                text: "ok",
                status: "received"

            },

            /* settiamo una variabile uguale a null per fare il confronto */

            searchUser: null

            /* creazione di un data vuoto che verrà richiamato nel v-model se fatto con il metodo alternativo descritto in html e quindi senza l'ausilio di un computed */

            /* searchUser: "" */
    
        },

        /* creiamo una funzione per cambiare l'utente in base al click */

        methods: {

            changeChat(i) {

                this.chatActive = i;

            },

            /* creiamo una funzione che permette all'utente di generare il messaggio e farsi rispondere con un altro messaggio (predefinito) dal computer */

            messageToSend() {
                const element = this.contacts[this.chatActive];
                element.messages.push(this.newMessage);
                setTimeout(() => element.messages.push(this.newAnswer), 1000);

                this.newMessage = {

                    date: "10/01/2020 15:57:00",
                    text: "",
                    status: "sent",
                    miniBox: false
    
                }

                this.newAnswer = {

                    date: "10/01/2020 15:58:00",
                    text: "ok",
                    status: "received",
                    miniBox: false

                }

            },

            blockInfo(numMess){

                if(this.contacts[this.chatActive].messages[numMess].miniBox === true)
                {this.contacts[this.chatActive].messages[numMess].miniBox = false} 
                else {
                this.contacts[this.chatActive].messages[numMess].miniBox = true
                }
                
            }

        },

        computed: {

            filterUser(){

                if(this.searchUser !== null){

                    return this.contacts.filter((element) =>{
                        
                        return this.searchUser.toLowerCase().split("").every(i => element.userName.toLowerCase().includes(i))

                    }) 

                } else {

                    return this.contacts

                }
            }

        }

    },

)

