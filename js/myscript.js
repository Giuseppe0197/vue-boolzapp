/* esercizio boolzap
Milestone 1 
Replica della grafica c on l a possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della l ista contatti: t ramite l a direttiva v-for, visualizzare
nome e i mmagine di ogni contatto */

/* andiamo a richiamare il contenitore per collegarlo a vue */

var container = new Vue (

    {
        el: "#mainPart",

        data: {

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
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received"
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
                            status: "sent"
                        },

                        {
                            date: "20/03/2020 16:30:55",
                            text: "Bene grazie! Stasera ci vediamo?",
                            status: "received"
                        },

                        {
                            date: "20/03/2020 16:35:00",
                            text: "Mi piacerebbe ma devo andare a fare la spesa",
                            status: "sent"
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
                            status: "received"
                        },

                        {
                            date: "28/03/2020 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent"
                        },

                        {
                            date: "28/03/2020 16:15:22",
                            text: "Ah scusa!",
                            status: "received"
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
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received"
                        }

                    ],
                }

            ]
    
        },

        methods: {

            changeChat(i) {

                this.chatActive = i;

            },

        }

    },

)

