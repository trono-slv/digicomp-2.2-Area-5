// --- DATABASE COMPLETO DELLE DOMANDE (150 DOMANDE DIGCOMP/ECDL) ---
const allQuestions = [
    // --- SET 1: Contenuti Digitali, IA, Copyright, Accessibilità (Domande 1-50) ---
    {q: "Qual è un formato audio comune per la compressione con perdita di qualità minima?", options: ["WAV", "FLAC", "MP3", "AAC"], a: 2},
    {q: "Quale formato di immagine supporta la trasparenza?", options: ["JPG", "GIF", "PNG", "BMP"], a: 2},
    {q: "In ECDL, qual è il formato standard per documenti di testo in Microsoft Word?", options: ["DOCX", "ODT", "TXT", "PDF"], a: 0},
    {q: "Qual è un principio chiave dell'accessibilità digitale?", options: ["Velocità", "Design", "Complessità", "Percezione"], a: 3},
    {q: "Quale strumento ECDL usa per creare fogli di calcolo?", options: ["Word", "Excel", "PowerPoint", "Access"], a: 1},
    {q: "Cos'è un prompt in IA per generare contenuti?", options: ["Un errore di sistema", "Una descrizione testuale", "Un codice sorgente", "Un'immagine di riferimento"], a: 1},
    {q: "Qual è un formato video comune per streaming?", options: ["AVI", "WMV", "MKV", "MP4"], a: 3},
    {q: "In copyright, cosa significa CC BY?", options: ["Uso libero", "Attribuzione obbligatoria", "Uso solo commerciale", "Nessuna modifica"], a: 1},
    {q: "Qual è un linguaggio di programmazione base in DigComp?", options: ["HTML", "Python", "Java", "C++"], a: 1},
    {q: "Qual è un rischio dei contenuti IA?", options: ["Bassa risoluzione", "Bias nei dati", "Troppo veloci", "Nessuna data di scadenza"], a: 1},
    {q: "In ECDL Word Processing, come si inserisce un'immagine?", options: ["Copia-Incolla", "Trascina e rilascia", "Inserisci > Immagini", "File > Aggiungi"], a: 2},
    {q: "Qual è un formato lossless per immagini?", options: ["JPG", "GIF", "PNG", "BMP"], a: 2},
    {q: "Cos'è l'accessibilità digitale in DigComp?", options: ["Velocità di download", "Garanzia di accesso per disabili", "Design colorato", "Solo per siti governativi"], a: 1},
    {q: "Qual è un uso della VR?", options: ["Messaggistica istantanea", "Simulazioni immersive", "Modifica foto", "Navigazione GPS"], a: 1},
    {q: "In copyright ECDL, qual è un'eccezione?", options: ["Uso commerciale", "Uso privato", "Pubblicazione online", "Modifica software"], a: 1},
    {q: "Qual è una funzione base in Excel ECDL?", options: ["=SOMMA()", "=FORMATTA()", "=STAMPA()", "=TESTO()"], a: 0},
    {q: "Cos'è un algoritmo in programmazione?", options: ["Sequenza istruzioni", "Un tipo di bug", "Un linguaggio di marcatura", "Un database"], a: 0},
    {q: "Qual è un tool per verificare accessibilità?", options: ["Photoshop", "WAVE", "Excel", "Word"], a: 1},
    {q: "Qual è un formato per app Android?", options: ["EXE", "ZIP", "IPA", "APK"], a: 3},
    {q: "In DigComp, qual è un vantaggio AR?", options: ["Crea mondi fittizi", "Esplorazione interattiva", "Sostituisce i documenti", "Blocca le pubblicità"], a: 1},
    {q: "Qual è CC BY-SA?", options: ["Attribuzione - Condividi allo stesso modo", "Non commerciale - Nessun derivato", "Solo attribuzione", "Uso educativo"], a: 0},
    {q: "In ECDL Spreadsheets, come si ordina dati?", options: ["File > Nuova", "Dati > Ordina", "Visualizza > Ordina", "Inserisci > Tabella"], a: 1},
    {q: "Cos'è un prompt efficace per IA immagini?", options: ["Scrivi una poesia", "Genera paesaggio", "Traduci testo", "Calcola equazione"], a: 1},
    {q: "Qual è un principio WCAG?", options: ["Percezione", "Estetica", "Rapidità", "Complessità"], a: 0},
    {q: "In programmazione, cos'è input?", options: ["Un'istruzione di stampa", "Un'interruzione di linea", "La risposta", "Dati forniti"], a: 3},
    {q: "Qual è un grafico per proporzioni in ECDL?", options: ["A barre", "A torta", "A linee", "Dispersione"], a: 1},
    {q: "Cos'è ransomware in copyright contesto?", options: ["Malware che blocca dati", "Software di modifica immagini", "Un database protetto", "Un servizio di streaming"], a: 0},
    {q: "Qual è un uso etico IA contenuti?", options: ["Copiare opere protette", "Integra con transparency", "Sostituire gli artisti", "Generare fake news"], a: 1},
    {q: "In DigComp, qual è robustezza accessibilità?", options: ["Interpretazione da tech assistive", "Design moderno", "Dimensione del file", "Velocità di caricamento"], a: 0},
    {q: "Qual è =MEDIA() in Excel ECDL?", options: ["Somma", "Moda", "Media", "Massimo"], a: 2},
    {q: "Cos'è pseudocodice?", options: ["Codice macchina", "Rappresentazione algoritmo", "Un linguaggio di basso livello", "Un tipo di database"], a: 1},
    {q: "Qual è un tool per infografiche?", options: ["Word", "Canva", "Excel", "Outlook"], a: 1},
    {q: "In copyright, cos'è TPM?", options: ["Misure protezione tecniche", "Test di performance", "Programma di monitoraggio", "Gestione transazioni"], a: 0},
    {q: "Qual è un dispositivo VR essenziale?", options: ["Stampante", "Visore", "Webcam", "Scanner"], a: 1},
    {q: "In ECDL, come esporti in PDF?", options: ["Modifica > PDF", "Stampa > PDF", "Inserisci > PDF", "File > PDF"], a: 3},
    {q: "Cos'è botnet?", options: ["Rete infetta controllata", "Un motore di ricerca", "Un tipo di cavo", "Un social network"], a: 0},
    {q: "Qual è un grafico per trend?", options: ["A torta", "A dispersione", "A linee", "A radar"], a: 2},
    {q: "Cos'è fair use in copyright ECDL?", options: ["Uso limitato per scopi specifici", "Distribuzione non autorizzata", "Vendita senza licenza", "Copia illimitata"], a: 0},
    {q: "Qual è un prompt per articolo IA?", options: ["Aggiungi un'immagine", "Scrivi sui benefici meditazione", "Calcola 2+2", "Disegna un cane"], a: 1},
    {q: "In programmazione, cos'è ciclo?", options: ["Variabile", "Funzione", "Condizione IF", "For/while"], a: 3},
    {q: "Qual è un rischio legale IA contenuti?", options: ["Costo elevato", "Proprietà intellettuale", "Bassa qualità audio", "Troppe versioni"], a: 1},
    {q: "In ECDL advanced, come usi SE nidificato?", options: ["=SE(A1=1)", "=SE(A1>10; SE(B1<5; 'Medio'; 'Basso'); 'Alto')", "=A1+B1", "=SOMMA(A1:B1)"], a: 1},
    {q: "Cos'è fileless malware in contesto copyright?", options: ["Malware in memoria senza file", "Un file immagine", "Un documento di testo", "Un database"], a: 0},
    {q: "Qual è un'applicazione AR avanzata?", options: ["Lettura email", "Istruzioni manutenzione", "Scrittura codici", "Invio SMS"], a: 1},
    {q: "In DigComp avanzato, come integri contenuti con accessibilità?", options: ["Rendi i testi solo rossi", "Aggiungi alt text e sottotitoli", "Rimuovi i link", "Rendi il sito più veloce"], a: 1},
    {q: "Cos'è rootkit?", options: ["Nasconde malware", "Un tipo di antivirus", "Un software di disegno", "Un browser"], a: 0},
    {q: "In ECDL, come crei grafico dinamico?", options: ["Inserisci > Grafico > Pivot", "Copia e incolla", "Salva come immagine", "Usa la calcolatrice"], a: 0},
    {q: "Qual è CC BY-NC-ND?", options: ["Attribuzione - Non commerciale - No derivati", "Uso commerciale libero", "Solo per enti pubblici", "Solo con modifiche"], a: 0},
    {q: "Cos'è scomposizione problema in programmazione?", options: ["Scrivere codice complesso", "Dividi in parti piccole", "Usare un solo linguaggio", "Ignorare i bug"], a: 1},
    {q: "In IA avanzata, come mitighi bias?", options: ["Usa dati variati", "Limita l'uso notturno", "Solo con connessione lenta", "Usa un solo colore"], a: 0},
    
    // --- SET 2: Sicurezza, Privacy, Benessere e Ambiente (Domande 51-100) ---
    {q: "Cos'è furto d'identità?", options: ["Cambiare il nome", "Comprare un nuovo PC", "Rubare info personali", "Navigare in incognito"], a: 2},
    {q: "Qual è un tipo di malware base?", options: ["Virus", "Antivirus", "Firewall", "Router"], a: 0},
    {q: "In ECDL IT Security, cos'è phishing?", options: ["Email fraudolente", "Un tipo di cavo", "Un aggiornamento software", "Un browser"], a: 0},
    {q: "Qual è un rischio ambientale tech?", options: ["Bassa velocità", "Consumo energia", "Eccesso di rumore", "Nuovi formati file"], a: 1},
    {q: "Cos'è 2FA?", options: ["Due file allegati", "Due fattori autenticazione", "Due formati video", "Due lingue"], a: 1},
    {q: "Qual è un crimine informatico?", options: ["Scrivere email", "DDoS", "Guardare video", "Comprare online"], a: 1},
    {q: "In salute digitale, cos'è benessere?", options: ["Solo fitness tracker", "Bilancio tech/vita", "Acquistare nuovi gadget", "Uso esclusivo di social"], a: 1},
    {q: "Cos'è ransomware?", options: ["Blocca dati per riscatto", "Software di editing", "Lettore multimediale", "Sistema operativo"], a: 0},
    {q: "Qual è una misura privacy ECDL?", options: ["Condividi tutto", "Leggi policy privacy", "Non usare Internet", "Usa solo email"], a: 1},
    {q: "Cos'è spyware?", options: ["Spia attività", "Software di calcolo", "Editor di testo", "Giocattolo digitale"], a: 0},
    {q: "Qual è un vantaggio backup?", options: ["Rallenta il PC", "Protezione da malware", "Occupa spazio", "Richiede Internet"], a: 1},
    {q: "Cos'è worm?", options: ["Auto-replica rete", "Un file di sistema", "Un accessorio hardware", "Un documento PDF"], a: 0},
    {q: "In ECDL, cos'è firewall?", options: ["Blocca traffico indesiderato", "Un tipo di stampante", "Software di grafica", "Un connettore"], a: 0},
    {q: "Qual è un impatto ambientale?", options: ["Maggiore connettività", "Aumento emissioni", "Maggiore velocità", "Più app"], a: 1},
    {q: "Cos'è trojan?", options: ["Software legittimo finto", "Un antivirus potente", "Un sistema di navigazione", "Un tipo di mouse"], a: 0},
    {q: "Qual è una pratica salute?", options: ["Stare seduti 10 ore", "Pause regolari", "Mangiare davanti al PC", "Usare schermo piccolo"], a: 1},
    {q: "Cos'è keylogger?", options: ["Registra tasti", "Un tipo di tastiera", "Un file log del sistema", "Un browser sicuro"], a: 0},
    {q: "In privacy, cos'è GDPR?", options: ["Regolamento UE privacy", "Un protocollo di rete", "Una lingua di programmazione", "Un formato file"], a: 0},
    {q: "Qual è un attacco DDoS?", options: ["Sovraccarico traffico", "Modifica file di testo", "Formattazione disco", "Installazione software"], a: 0},
    {q: "In ECDL Security, come previeni phishing?", options: ["Rispondi subito", "Verifica mittente", "Disattiva Internet", "Condividi password"], a: 1},
    {q: "Cos'è adware?", options: ["Mostra pubblicità", "Un editor di testo", "Un software di sicurezza", "Un sistema operativo"], a: 0},
    {q: "Qual è un rischio salute tech?", options: ["Stress digitale", "Maggiore sonno", "Migliore vista", "Aumento concentrazione"], a: 0},
    {q: "Cos'è botnet?", options: ["Rete PC infetti", "Un'interfaccia utente", "Un software CAD", "Un'app meteo"], a: 0},
    {q: "In ambientale, cos'è e-waste?", options: ["Rifiuti elettronici", "Fatture digitali", "Email di spam", "File temporanei"], a: 0},
    {q: "Qual è un tool antivirus ECDL?", options: ["Word", "Avast", "Excel", "Outlook"], a: 1},
    {q: "Cos'è fileless malware?", options: ["In memoria", "Su CD-ROM", "Su carta", "In un file ZIP"], a: 0},
    {q: "Qual è una pratica privacy?", options: ["Pubblica indirizzo", "Limita condivisione social", "Usa password semplici", "Accetta tutti i cookie"], a: 1},
    {q: "Cos'è rootkit?", options: ["Nasconde malware", "Un tool di pulizia", "Un software di backup", "Un editor di codice"], a: 0},
    {q: "In salute, cos'è digital detox?", options: ["Pausa da tech", "Aggiornamento software", "Pulizia disco", "Navigazione veloce"], a: 0},
    {q: "Qual è un crimine cyber avanzato?", options: ["Social engineering", "Scrivere una lettera", "Fare la spesa", "Meditare"], a: 0},
    {q: "In ECDL advanced security, cos'è encryption?", options: ["Cifratura dati", "Formattazione testo", "Invio email", "Stampa documento"], a: 0},
    {q: "Qual è un impatto ambientale data center?", options: ["Alto consumo energia", "Basso consumo", "Zero emissioni", "Aumento biodiversità"], a: 0},
    {q: "Cos'è zero-day exploit?", options: ["Vulnerabilità sconosciuta", "Un giorno di vacanza", "Un nuovo software", "Un file temporaneo"], a: 0},
    {q: "In privacy avanzata, cos'è data breach?", options: ["Violazione dati", "Copia di un file", "Formattazione disco", "Download legale"], a: 0},
    {q: "Qual è un rischio benessere social media?", options: ["Più tempo libero", "Cyberbullismo", "Migliore concentrazione", "Aumento empatia"], a: 1},
    {q: "Cos'è man-in-the-middle attack?", options: ["Intercettazione comunicazioni", "Un errore di battitura", "Una funzione Excel", "Un software di disegno"], a: 0},
    {q: "In ECDL, come gestisci password manager?", options: ["Scrivi su post-it", "Usa manager sicuro", "Password semplice per tutto", "Condividi con amici"], a: 1},
    {q: "Qual è un metodo ambientale sostenibile?", options: ["Cloud green", "Data center vecchi", "Stampa inutile", "Uso di combustibili fossili"], a: 0},
    {q: "Cos'è social engineering?", options: ["Manipolazione umana", "Progettazione software", "Disegno grafico", "Analisi matematica"], a: 0},
    {q: "In salute avanzata, cos'è ergonomia workstation?", options: ["Postura corretta", "Schermo piccolo", "Tastiera scomoda", "Seduta rigida"], a: 0},
    {q: "Qual è un attacco ransomware avanzato?", options: ["Solo blocco schermo", "Cripta e richiede pagamento", "Pubblica dati online", "Invia spam"], a: 1},
    {q: "Cos'è VPN per privacy?", options: ["Maschera IP", "Aumenta la velocità", "Software di gioco", "Rende pubblici i dati"], a: 0},
    {q: "In ECDL, cos'è multi-factor authentication?", options: ["Una sola password", "Più fattori", "Solo impronta digitale", "Solo nome utente"], a: 1},
    {q: "Qual è un rischio IoT sicurezza?", options: ["Dispositivi vulnerabili", "Troppo veloci", "Troppo piccoli", "Troppo economici"], a: 0},
    {q: "Cos'è digital footprint?", options: ["Tracce online", "Un'impronta digitale", "Un file system", "Una cartella"], a: 0},
    {q: "In benessere, cos'è nomofobia?", options: ["Paura senza telefono", "Amore per i computer", "Hobby digitale", "Dormire poco"], a: 0},
    {q: "Qual è un metodo anti-phishing avanzato?", options: ["Verifica URL e certificati", "Clicca su tutti i link", "Rispondi a tutte le email", "Disattiva antivirus"], a: 0},
    {q: "Cos'è carbon footprint tech?", options: ["Emissioni CO2 da dispositivi", "Grandezza del PC", "Memoria RAM", "Numero di porte USB"], a: 0},
    {q: "In ECDL security, cos'è patch management?", options: ["Aggiornamenti regolari", "Eliminare i file", "Disattivare firewall", "Cambiare sfondo"], a: 0},
    {q: "Qual è un rischio AI sicurezza?", options: ["Deepfake", "Troppo lente", "Poco accurate", "Nessun suono"], a: 0},
    
    // --- SET 3: Competenze Digitali, Troubleshooting e Innovazione (Domande 101-150) ---
    {q: "Qual è differenza computer fisso/portatile?", options: ["Fisso più veloce", "Portatile trasportabile", "Fisso più economico", "Portatile più grande"], a: 1},
    {q: "Cos'è uno smartphone?", options: ["Dispositivo tasca", "Una radio", "Un orologio analogico", "Un mouse"], a: 0},
    {q: "In ECDL Computer Essentials, cos'è app gratuita?", options: ["Senza pagamento", "Senza pubblicità", "Senza installazione", "Senza Internet"], a: 0},
    {q: "Qual è un bisogno tech base?", options: ["Navigazione web", "Creare un videogioco", "Programmare IA", "Progettare chip"], a: 0},
    {q: "Cos'è uso creativo tech?", options: ["Innovare processi", "Copiare codici", "Navigare senza scopo", "Usare vecchi software"], a: 0},
    {q: "Qual è un divario competenze?", options: ["Mancanza skills digitali", "Troppe app", "PC troppo veloce", "Troppi cavi"], a: 0},
    {q: "Cos'è tablet?", options: ["Touchscreen portatile", "Telefono fisso", "TV via cavo", "Stampante laser"], a: 0},
    {q: "In ECDL, cos'è cloud?", options: ["Storage online", "Sistema operativo", "Unità disco", "Antivirus"], a: 0},
    {q: "Qual è un problema tecnico semplice?", options: ["Riavvio dispositivo", "Sostituzione scheda madre", "Riprogrammazione sistema", "Intervento hardware"], a: 0},
    {q: "Cos'è IoT?", options: ["Dispositivi connessi", "Un tipo di file", "Un linguaggio di programmazione", "Un protocollo di rete"], a: 0},
    {q: "In uso creativo, cos'è app?", options: ["Programma mobile", "Un libro cartaceo", "Una ricetta", "Un brano musicale"], a: 0},
    {q: "Qual è un aggiornamento competenze?", options: ["Corsi online", "Lettura giornali", "Ascolto radio", "Guardare la TV"], a: 0},
    {q: "Cos'è laptop?", options: ["Portatile integrato", "Desktop grande", "Smartphone vecchio", "Stampante 3D"], a: 0},
    {q: "In ECDL Essentials, cos'è backup?", options: ["Copia dati", "Cancellazione file", "Formattazione disco", "Installazione software"], a: 0},
    {q: "Qual è un bisogno risposte tech?", options: ["Valuta tool per task", "Scrive poesie", "Disegna fiori", "Calcola equazioni"], a: 0},
    {q: "Cos'è e-commerce?", options: ["Acquisti online", "Email di spam", "Lettura libri", "Guarda film"], a: 0},
    {q: "In creativo, cos'è mashup?", options: ["Integrazione contenuti", "Un tipo di sport", "Un'auto d'epoca", "Un piatto culinario"], a: 0},
    {q: "Qual è un divario digitale?", options: ["Accesso unequal", "Troppi computer", "Troppo veloce", "Troppi colori"], a: 0},
    {q: "Cos'è troubleshooting base?", options: ["Verifica connessioni", "Riscrivi codice", "Sostituisci CPU", "Crea un database"], a: 0},
    {q: "In ECDL, cos'è VPN?", options: ["Rete privata virtuale", "Virus pericoloso", "Nuovo protocollo", "Software di calcolo"], a: 0},
    {q: "Qual è un uso IA creativo?", options: ["Genera idee", "Copia e incolla", "Elimina i file", "Formattazione disco"], a: 0},
    {q: "Cos'è self-assessment competenze?", options: ["Valuta gaps", "Acquista software", "Naviga in incognito", "Stampa un libro"], a: 0},
    {q: "Qual è un problema rete?", options: ["Riavvio router", "Cambio password", "Rimuovi file", "Installa un gioco"], a: 0},
    {q: "In ECDL Online, cos'è pagamento digitale?", options: ["PayPal", "Contanti", "Assegno", "Bonifico cartaceo"], a: 0},
    {q: "Qual è un'innovazione tech?", options: ["Automatizza processi", "Rende più lenti", "Rende più difficili", "Aumenta i bug"], a: 0},
    {q: "Cos'è big data in problem solving?", options: ["Analisi dati massivi", "Pochi dati", "Dati cartacei", "Dati irrilevanti"], a: 0},
    {q: "In creativo avanzato, cos'è coding per custom?", options: ["Script personalizzati", "Disegno semplice", "Scrittura email", "Lettura libri"], a: 0},
    {q: "Qual è un divario generazionale?", options: ["Anziani meno skills", "Giovani meno esperti", "Tutti uguali", "Solo per ricchi"], a: 0},
    {q: "Cos'è debug codice?", options: ["Trova errori", "Scrivi codice", "Copia codice", "Elimina codice"], a: 0},
    {q: "In ECDL advanced, cos'è macro Excel?", options: ["Automatizza task", "Calcola somma", "Formatta testo", "Stampa foglio"], a: 0},
    {q: "Qual è un uso blockchain creativo?", options: ["Tracciabilità", "Disegno semplice", "Scrittura email", "Ascolto musica"], a: 0},
    {q: "Cos'è lifelong learning digitali?", options: ["Aggiornamento continuo", "Fine apprendimento", "Solo per giovani", "Solo in ufficio"], a: 0},
    {q: "Qual è un problema hardware avanzato?", options: ["Sostituzione componente", "Riavvio sistema", "Pulizia schermo", "Cambio password"], a: 0},
    {q: "In ECDL, cos'è virtualizzazione?", options: ["Macchine virtuali", "Stampare", "Disegnare", "Scrivere testi"], a: 0},
    {q: "Qual è un'innovazione AI?", options: ["Predizioni", "Lentezza", "Inaccuratezza", "Bassa risoluzione"], a: 0},
    {q: "Cos'è digital divide socio-economico?", options: ["Accesso basato reddito", "Tutti uguali", "Solo per paesi ricchi", "Solo per giovani"], a: 0},
    {q: "Qual è un troubleshooting rete?", options: ["Ping e traceroute", "Cambio sfondo", "Scrittura testo", "Disegno"], a: 0},
    {q: "In creativo, cos'è 3D printing?", options: ["Stampa oggetti", "Stampa su carta", "Stampa foto", "Stampa PDF"], a: 0},
    {q: "Qual è un assessment tool competenze?", options: ["Quiz online", "Libro stampato", "Audio registrato", "Video tutorial"], a: 0},
    {q: "Cos'è agile methodology?", options: ["Sviluppo iterativo", "Lavoro lento", "Lavoro rigido", "Nessuna collaborazione"], a: 0},
    {q: "In ECDL, cos'è data analytics?", options: ["Insights da dati", "Copia file", "Elimina file", "Formattazione disco"], a: 0},
    {q: "Qual è un uso drone creativo?", options: ["Ispezioni", "Scrittura codice", "Calcolo", "Lettura libri"], a: 0},
    {q: "Cos'è gender gap digitali?", options: ["Donne meno STEM", "Uomini meno esperti", "Parità di accesso", "Solo per paesi poveri"], a: 0},
    {q: "Qual è un problema software avanzato?", options: ["Reinstall OS", "Riavvio sistema", "Pulizia schermo", "Cambio password"], a: 0},
    {q: "In creativo, cos'è metaverso?", options: ["Mondo virtuale", "Vecchio browser", "Unità disco", "Software di calcolo"], a: 0},
    {q: "Qual è un tool per gap competenze?", options: ["Piattaforme e-learning", "Vecchi libri", "Software obsoleto", "Radio"], a: 0},
    {q: "Cos'è cybersecurity in problem solving?", options: ["Protezione minacce", "Navigazione lenta", "Disegno grafico", "Scrittura testi"], a: 0},
    {q: "In ECDL advanced, cos'è pivot table?", options: ["Analisi dati", "Somma semplice", "Formattazione testo", "Stampa foto"], a: 0},
    {q: "Qual è un'innovazione green tech?", options: ["Energia rinnovabile", "Inquinamento", "Rifiuti elettronici", "Consumo elevato"], a: 0},
    {q: "Cos'è adaptive learning?", options: ["Personalizzato per gaps", "Per tutti uguale", "Solo in aula", "Senza interazione"], a: 0}
];
// --- FINE DATABASE COMPLETO DELLE 150 DOMANDE ---

// VARIABILI GLOBALI E CONFIGURAZIONE
const quizForm = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-quiz');

// VARIABILI DEI DUE PULSANTI FINALI (AGGIORNATI DA HTML)
const restartNewQuizButton = document.getElementById('restart-new-quiz');
const repeatSameQuizButton = document.getElementById('repeat-same-quiz');

const resultArea = document.getElementById('result-area');
const timerDisplay = document.getElementById('timer');
const navigationInfo = document.getElementById('navigation-info');

let questionsToDisplay = []; // Le 30 domande attuali estratte
let userAnswers = {}; 
let currentQuestionIndex = 0;
let timerInterval;
const MAX_TIME_SECONDS = 30 * 60; // 30 minuti
const QUIZ_LENGTH = 30; // Numero di domande da estrarre (30 su 150 totali)
const PASS_SCORE = 24; // Punteggio richiesto per superare (80% di 30)

// --- FUNZIONI UTILITY ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function selectRandomQuestions(sourceArray, count) {
    const shuffled = [...sourceArray];
    shuffleArray(shuffled);
    return shuffled.slice(0, count);
}

// --- LOGICA QUIZ ---

/**
 * Inizializza il quiz estraendo 30 nuove domande e rimescolando le opzioni.
 */
function initializeQuiz() {
    // 1. Reset stato
    clearInterval(timerInterval);
    userAnswers = {};
    currentQuestionIndex = 0;
    quizForm.innerHTML = '';
    
    // 2. Estrazione e rimescolamento delle 30 nuove domande
    questionsToDisplay = selectRandomQuestions(allQuestions, QUIZ_LENGTH);
    
    // Preparazione dei dati: rimescola le opzioni e memorizza il nuovo indice corretto
    questionsToDisplay.forEach(question => {
        const originalOptions = [...question.options];
        shuffleArray(question.options);
        
        const correctText = originalOptions[question.a];
        question.newCorrectIndex = question.options.findIndex(opt => opt === correctText);
    });

    // 3. Avvia il display e il timer
    startTimer();
    
    // 4. Gestione visibilità interfaccia
    resultArea.classList.add('hidden');
    quizForm.classList.remove('hidden');
    navigationInfo.classList.remove('hidden');
    submitButton.classList.add('hidden'); // NASCONDI IL PULSANTE DI FINALE (QUESTO È CRUCIALE)
    showQuestion(currentQuestionIndex); // Mostra la prima domanda
}

/**
 * Ripete il quiz corrente con le STESSE 30 domande e opzioni già estratte.
 */
function repeatQuiz() {
    clearInterval(timerInterval);
    userAnswers = {}; // Cancella le risposte precedenti
    currentQuestionIndex = 0;
    
    // Reimposta la visualizzazione e il timer
    resultArea.classList.add('hidden');
    quizForm.classList.remove('hidden');
    navigationInfo.classList.remove('hidden');
    submitButton.classList.add('hidden'); // NASCONDI IL PULSANTE DI FINALE
    
    startTimer();
    showQuestion(currentQuestionIndex);
}


function startTimer() {
    let timeLeft = MAX_TIME_SECONDS;
    
    const updateDisplay = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `Tempo rimanente: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    updateDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Tempo Scaduto!";
            submitQuiz(true); // Forza l'invio allo scadere
        }
    }, 1000);
}

function showQuestion(qIndex) {
    if (qIndex >= QUIZ_LENGTH) {
        submitQuiz(false); 
        return;
    }

    const question = questionsToDisplay[qIndex];
    const output = `
        <div class="question-block" data-q-index="${qIndex}">
            <h4>${qIndex + 1}/${QUIZ_LENGTH}. ${question.q}</h4>
            ${question.options.map((option, oIndex) => {
                const letter = String.fromCharCode(65 + oIndex);
                // HTML FONDAMENTALE PER LE OPZIONI IN COLONNA:
                // La <label class="option-group"> viene gestita dal CSS per il display: block;
                return `
                    <label class="option-group">
                        <input type="radio" name="currentQuestion" value="${oIndex}" ${userAnswers[qIndex] === oIndex ? 'checked' : ''}>
                        <span>${letter}) ${option}</span>
                    </label>
                `;
            }).join('')}
        </div>
    `;
    
    quizForm.innerHTML = output;
    
    navigationInfo.textContent = `Domanda ${qIndex + 1} di ${QUIZ_LENGTH}`;

    // Aggiunge l'event listener per il passaggio automatico
    const radios = quizForm.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        // La logica di avanzamento è legata al click sul radio (che si attiva cliccando la label)
        radio.addEventListener('click', handleAnswerSelection);
    });
}

/**
 * FUNZIONE CHIAVE: Avanza alla domanda successiva e memorizza la risposta.
 */
function handleAnswerSelection(event) {
    const selectedValue = parseInt(event.target.value);
    userAnswers[currentQuestionIndex] = selectedValue; // Memorizza la risposta
    
    // Avanza alla domanda successiva
    currentQuestionIndex++;
    if (currentQuestionIndex < QUIZ_LENGTH) {
        // Breve pausa per mostrare la selezione prima di passare
        setTimeout(() => showQuestion(currentQuestionIndex), 150); 
    } else {
        submitQuiz(false); // Fine del test
    }
}


function submitQuiz(timeUp = false) {
    clearInterval(timerInterval);
    navigationInfo.classList.add('hidden');
    
    let score = 0;
    const summaryArea = document.getElementById('summary-area');
    let summaryHtml = '';

    questionsToDisplay.forEach((question, index) => {
        const selectedValue = userAnswers[index]; 
        const isAnswered = selectedValue !== undefined;
        
        let isCorrect = false;
        if (isAnswered && selectedValue === question.newCorrectIndex) {
            score++;
            isCorrect = true;
        }

        const correctLetter = String.fromCharCode(65 + question.newCorrectIndex);
        const userAnswerLetter = isAnswered ? String.fromCharCode(65 + selectedValue) : 'N/D';
        const userAnswerText = isAnswered ? question.options[selectedValue] : 'Nessuna risposta data';

        // Costruisci il riepilogo colorato
        summaryHtml += `
            <div class="summary-item ${isCorrect ? 'correct' : 'incorrect'}">
                <strong>${index + 1}. ${question.q}</strong><br>
                Risposta Data: ${isAnswered ? `<span style="font-weight: bold;">${userAnswerLetter}) ${userAnswerText}</span>` : 'Nessuna risposta'}
                
                ${isCorrect ? '' : 
                    `<br>La tua risposta era <span style="color: #dc3545;">ERRATA</span>.
                    <br>Risposta corretta: <span class="correct-answer">${correctLetter}) ${question.options[question.newCorrectIndex]}</span>`}
            </div>
        `;
    });

    // Mostra il risultato generale (punteggio ed esito)
    const scoreText = document.getElementById('score-text');
    const outcomeText = document.getElementById('outcome-text');
    
    scoreText.textContent = `Hai totalizzato ${score} risposte corrette su ${QUIZ_LENGTH}. (Superamento richiesto: ${PASS_SCORE}).`;
    
    if (score >= PASS_SCORE) {
        outcomeText.textContent = "ESITO SUPERATO 🎉";
        outcomeText.className = 'passed';
    } else {
        outcomeText.textContent = timeUp ? "TEMPO SCADUTO - ESITO NON SUPERATO 😞" : "ESITO NON SUPERATO 😞";
        outcomeText.className = 'failed';
    }

    // Visualizza l'area dei risultati
    resultArea.classList.remove('hidden');
    summaryArea.innerHTML = summaryHtml;
    quizForm.classList.add('hidden');
    submitButton.classList.add('hidden');
}

// --- GESTIONE EVENTI ---

// Pulsante 1: Genera Nuovo Test 
restartNewQuizButton.addEventListener('click', () => {
    window.scrollTo(0, 0); 
    initializeQuiz(); 
});

// Pulsante 2: Ripeti Stesso Test 
repeatSameQuizButton.addEventListener('click', () => {
    window.scrollTo(0, 0); 
    repeatQuiz(); 
});

// Avvia il quiz all'apertura della pagina
document.addEventListener('DOMContentLoaded', initializeQuiz);
