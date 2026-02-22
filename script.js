// --- DATABASE COMPLETO DELLE DOMANDE ---
const allQuestions = [
    {q: "Qual è un formato audio comune per la compressione con perdita di qualità minima?", options: ["WAV", "FLAC", "MP3", "AAC"], a: 2},
    {q: "Quale formato di immagine supporta la trasparenza?", options: ["JPG", "GIF", "PNG", "BMP"], a: 2},
    {q: "qual è il formato standard per documenti di testo in Microsoft Word?", options: ["DOCX", "ODT", "TXT", "PDF"], a: 0},
    {q: "Qual è un principio chiave dell'accessibilità digitale?", options: ["Velocità", "Design", "Complessità", "Percezione"], a: 3},
    {q: "Quale strumento è usato per creare fogli di calcolo?", options: ["Word", "Excel", "PowerPoint", "Access"], a: 1},
    {q: "Cos'è un prompt in IA per generare contenuti?", options: ["Un errore di sistema", "Una descrizione testuale", "Un codice sorgente", "Un'immagine di riferimento"], a: 1},
    {q: "Qual è un formato video comune per streaming?", options: ["AVI", "WMV", "MKV", "MP4"], a: 3},
    {q: "In copyright, cosa significa CC BY?", options: ["Uso libero", "Attribuzione obbligatoria", "Uso solo commerciale", "Nessuna modifica"], a: 1},
    {q: "Qual è un linguaggio di programmazione base?", options: ["HTML", "Python", "Java", "C++"], a: 1},
    {q: "Qual è un rischio dei contenuti IA?", options: ["Bassa risoluzione", "Bias nei dati", "Troppo veloci", "Nessuna data di scadenza"], a: 1},
    {q: "In Word, come si inserisce un'immagine?", options: ["Copia-Incolla", "Trascina e rilascia", "Inserisci > Immagini", "File > Aggiungi"], a: 2},
    {q: "Qual è un formato lossless per immagini?", options: ["JPG", "GIF", "PNG", "BMP"], a: 2},
    {q: "Cos'è l'accessibilità digitale?", options: ["Velocità di download", "Garanzia di accesso per disabili", "Design colorato", "Solo per siti governativi"], a: 1},
    {q: "Qual è un uso della VR?", options: ["Messaggistica istantanea", "Simulazioni immersive", "Modifica foto", "Navigazione GPS"], a: 1},
    {q: "Qual è una funzione base in Excel?", options: ["=SOMMA()", "=FORMATTA()", "=STAMPA()", "=TESTO()"], a: 0},
    {q: "Cos'è un algoritmo in programmazione?", options: ["Sequenza istruzioni", "Un tipo di bug", "Un linguaggio di marcatura", "Un database"], a: 0},
    {q: "Qual è un tool per verificare accessibilità?", options: ["Photoshop", "WAVE", "Excel", "Word"], a: 1},
    {q: "Qual è un formato per app Android?", options: ["EXE", "ZIP", "IPA", "APK"], a: 3},
    {q: "qual è un vantaggio AR?", options: ["Crea mondi fittizi", "Esplorazione interattiva", "Sostituisce i documenti", "Blocca le pubblicità"], a: 1},
    {q: "In Spreadsheets, come si ordinano dati?", options: ["File > Nuova", "Dati > Ordina", "Visualizza > Ordina", "Inserisci > Tabella"], a: 1},
    {q: "Qual è un prompt efficace per generare immagini con IA?", options: ["Scrivi una poesia", "Genera paesaggio", "Traduci testo", "Calcola equazione"], a: 1},
    {q: "Qual è un principio WCAG?", options: ["Percezione", "Estetica", "Rapidità", "Complessità"], a: 0},
    {q: "In programmazione, cos'è input?", options: ["Un'istruzione di stampa", "Un'interruzione di linea", "La risposta", "Dati forniti"], a: 3},
    {q: "Qual è un grafico per proporzioni?", options: ["A barre", "A torta", "A linee", "Dispersione"], a: 1},
    {q: "Cos'è un ransomware?", options: ["Malware che blocca dati", "Software di modifica immagini", "Un database protetto", "Un servizio di streaming"], a: 0},
    {q: "Cosa indica in Excel la funzione =MEDIA()?", options: ["Somma", "Moda", "Media", "Massimo"], a: 2},
    {q: "Cos'è pseudocodice?", options: ["Codice macchina", "Rappresentazione algoritmo", "Un linguaggio di basso livello", "Un tipo di database"], a: 1},
    {q: "Qual è un tool per infografiche?", options: ["Word", "Canva", "Excel", "Outlook"], a: 1},
    {q: "In copyright, cos'è TPM?", options: ["Misure protezione tecniche", "Test di performance", "Programma di monitoraggio", "Gestione transazioni"], a: 0},
    {q: "Qual è un dispositivo VR essenziale?", options: ["Stampante", "Visore", "Webcam", "Scanner"], a: 1},
    {q: "come esporti in PDF?", options: ["Modifica > PDF", "Stampa > PDF", "Inserisci > PDF", "File > PDF"], a: 3},
    {q: "Cos'è botnet?", options: ["Rete infetta controllata", "Un motore di ricerca", "Un tipo di cavo", "Un social network"], a: 0},
    {q: "Qual è un grafico per trend?", options: ["A torta", "A dispersione", "A linee", "A radar"], a: 2},
    {q: "Qale indica una funzione SE nidificata?", options: ["=SE(A1=1)", "=SE(A1>10; SE(B1<5; 'Medio'; 'Basso'); 'Alto')", "=A1+B1", "=SOMMA(A1:B1)"], a: 1},
    {q: "Qual è un'applicazione AR avanzata?", options: ["Lettura email", "Istruzioni manutenzione", "Scrittura codici", "Invio SMS"], a: 1},
    {q: "come integri contenuti con accessibilità?", options: ["Rendi i testi solo rossi", "Aggiungi alt text e sottotitoli", "Rimuovi i link", "Rendi il sito più veloce"], a: 1},
    {q: "Cos'è rootkit?", options: ["Nasconde malware", "Un tipo di antivirus", "Un software di disegno", "Un browser"], a: 0},
    {q: "come crei grafico dinamico?", options: ["Inserisci > Grafico > Pivot", "Copia e incolla", "Salva come immagine", "Usa la calcolatrice"], a: 0},
    {q: "come mitighi bias?", options: ["Usa dati variati", "Limita l'uso notturno", "Solo con connessione lenta", "Usa un solo colore"], a: 0},
    {q: "Cos'è furto d'identità?", options: ["Cambiare il nome", "Comprare un nuovo PC", "Rubare info personali", "Navigare in incognito"], a: 2},
    {q: "Qual è un tipo di malware base?", options: ["Virus", "Antivirus", "Firewall", "Router"], a: 0},
    {q: "cos'è phishing?", options: ["Email fraudolente", "Un tipo di cavo", "Un aggiornamento software", "Un browser"], a: 0},
    {q: "Qual è un rischio ambientale tech?", options: ["Bassa velocità", "Consumo energia", "Eccesso di rumore", "Nuovi formati file"], a: 1},
    {q: "Cos'è 2FA?", options: ["Due file allegati", "Due fattori autenticazione", "Due formati video", "Due lingue"], a: 1},
    {q: "Qual è un crimine informatico?", options: ["Scrivere email", "DDoS", "Guardare video", "Comprare online"], a: 1},
    {q: "In salute digitale, cos'è benessere?", options: ["Solo fitness tracker", "Bilancio tech/vita", "Acquistare nuovi gadget", "Uso esclusivo di social"], a: 1},
    {q: "Cos'è ransomware?", options: ["Blocca dati per riscatto", "Software di editing", "Lettore multimediale", "Sistema operativo"], a: 0},
    {q: "Qual è una misura privacy ECDL?", options: ["Condividi tutto", "Leggi policy privacy", "Non usare Internet", "Usa solo email"], a: 1},
    {q: "Cos'è uno spyware?", options: ["Spia attività", "Software di calcolo", "Editor di testo", "Giocattolo digitale"], a: 0},
    {q: "Qual è un vantaggio del backup?", options: ["Rallenta il PC", "Protezione da malware", "Occupa spazio", "Richiede Internet"], a: 1},
    {q: "Cos'è un worm?", options: ["Auto-replica rete", "Un file di sistema", "Un accessorio hardware", "Un documento PDF"], a: 0},
    {q: "cos'è un firewall?", options: ["Blocca traffico indesiderato", "Un tipo di stampante", "Software di grafica", "Un connettore"], a: 0},
    {q: "Cos'è trojan?", options: ["Software legittimo finto", "Un antivirus potente", "Un sistema di navigazione", "Un tipo di mouse"], a: 0},
    {q: "Cos'è keylogger?", options: ["Registra tasti", "Un tipo di tastiera", "Un file log del sistema", "Un browser sicuro"], a: 0},
    {q: "cos'è la GDPR?", options: ["Regolamento UE privacy", "Un protocollo di rete", "Una lingua di programmazione", "Un formato file"], a: 0},
    {q: "Qual è un attacco DDoS?", options: ["Sovraccarico traffico", "Modifica file di testo", "Formattazione disco", "Installazione software"], a: 0},
    {q: "come previeni un phishing?", options: ["Rispondi subito", "Verifica mittente", "Disattiva Internet", "Condividi password"], a: 1},
    {q: "Cos'è un adware?", options: ["Mostra pubblicità", "Un editor di testo", "Un software di sicurezza", "Un sistema operativo"], a: 0},
    {q: "Qual è un rischio salute tech?", options: ["Stress digitale", "Maggiore sonno", "Migliore vista", "Aumento concentrazione"], a: 0},
    {q: "Cos'è un botnet?", options: ["Rete PC infetti", "Un'interfaccia utente", "Un software CAD", "Un'app meteo"], a: 0},
    {q: "cos'è un e-waste?", options: ["Rifiuti elettronici", "Fatture digitali", "Email di spam", "File temporanei"], a: 0},
    {q: "Qual è un tool antivirus?", options: ["Word", "Avast", "Excel", "Outlook"], a: 1},
    {q: "Qual è una pratica privacy?", options: ["Pubblica indirizzo", "Limita condivisione social", "Usa password semplici", "Accetta tutti i cookie"], a: 1},
    {q: "Qual è un crimine cyber avanzato?", options: ["Social engineering", "Scrivere una lettera", "Fare la spesa", "Meditare"], a: 0},
    {q: "Qual è un impatto ambientale di un data center?", options: ["Alto consumo energia", "Basso consumo", "Zero emissioni", "Aumento biodiversità"], a: 0},
    {q: "cos'è un data breach?", options: ["Violazione dati", "Copia di un file", "Formattazione disco", "Download legale"], a: 0},
    {q: "Qual è un rischio benessere derivante dai social media?", options: ["Più tempo libero", "Cyberbullismo", "Migliore concentrazione", "Aumento empatia"], a: 1},
    {q: "Cos'è un man-in-the-middle attack?", options: ["Intercettazione comunicazioni", "Un errore di battitura", "Una funzione Excel", "Un software di disegno"], a: 0},
    {q: "Qual è un metodo ambientale sostenibile?", options: ["Cloud green", "Data center vecchi", "Stampa inutile", "Uso di combustibili fossili"], a: 0},
    {q: "Cos'è social engineering?", options: ["Manipolazione umana", "Progettazione software", "Disegno grafico", "Analisi matematica"], a: 0},
    {q: "Qual è un attacco ransomware avanzato?", options: ["Solo blocco schermo", "Cripta e richiede pagamento", "Pubblica dati online", "Invia spam"], a: 1},
    {q: "Cosa fa una VPN?", options: ["Maschera IP", "Aumenta la velocità", "Software di gioco", "Rende pubblici i dati"], a: 0},
    {q: "cos'è multi-factor authentication?", options: ["Una sola password", "Più fattori", "Solo impronta digitale", "Solo nome utente"], a: 1},
    {q: "Cos'è digital footprint?", options: ["Tracce online", "Un'impronta digitale", "Un file system", "Una cartella"], a: 0},
    {q: "Qual è un metodo anti-phishing avanzato?", options: ["Verifica URL e certificati", "Clicca su tutti i link", "Rispondi a tutte le email", "Disattiva antivirus"], a: 0},
    {q: "Cos'è carbon footprint tech?", options: ["Emissioni CO2 da dispositivi", "Grandezza del PC", "Memoria RAM", "Numero di porte USB"], a: 0},
    {q: "Qual è differenza computer fisso/portatile?", options: ["Fisso più veloce", "Portatile trasportabile", "Fisso più economico", "Portatile più grande"], a: 1},
    {q: "cos'è app gratuita?", options: ["Senza pagamento", "Senza pubblicità", "Senza installazione", "Senza Internet"], a: 0},
    {q: "Cos'è tablet?", options: ["Touchscreen portatile", "Telefono fisso", "TV via cavo", "Stampante laser"], a: 0},
    {q: "cos'è il cloud?", options: ["Storage online", "Sistema operativo", "Unità disco", "Antivirus"], a: 0},
    {q: "cos'è un backup?", options: ["Copia dati", "Cancellazione file", "Formattazione disco", "Installazione software"], a: 0},
    {q: "cos'è una VPN?", options: ["Rete privata virtuale", "Virus pericoloso", "Nuovo protocollo", "Software di calcolo"], a: 0},
    {q: "Qual è un uso IA creativo?", options: ["Genera idee", "Copia e incolla", "Elimina i file", "Formattazione disco"], a: 0},
    {q: "cosa fa una macro in Excel?", options: ["Automatizza task", "Calcola somma", "Formatta testo", "Stampa foglio"], a: 0},
    {q: "Qual è la differenza principale tra un computer fisso (desktop) e un computer portatile (laptop)?", options: ["Il computer fisso è trasportabile mentre il portatile rimane fisso", "Il computer fisso ha una torre separata, monitor, tastiera e mouse, mentre il portatile integra tutto in un unico dispositivo pieghevole", "Non esiste alcuna differenza tra i due", "Il portatile è sempre più potente del computer fisso"], a: 1},
    {q: "Quali sono le funzioni principali di uno smartphone?", options: ["Effettuare solo chiamate e inviare SMS", "Comunicazione, navigazione web, fotocamera, GPS, produttività e social network", "Solo giocare e guardare video", "Solo archiviare file"], a: 1},
    {q: "Le app e i programmi possono essere:", options: ["Sempre a pagamento", "Solo gratuiti", "Gratuiti o a pagamento, con possibili acquisti in-app o abbonamenti", "Solo open source"], a: 2},
    {q: "A cosa serve sincronizzare i dispositivi come smartphone, tablet e computer?", options: ["Solo per trasferire musica", "Per accedere agli stessi contatti, documenti e fotografie da tutti i dispositivi", "Solo per risparmiare batteria", "Per aumentare la velocità di Internet"], a: 1},
    {q: "Quali sono i tre principali sistemi operativi per computer desktop e portatili?", options: ["Android, iOS e Windows Phone", "Microsoft Windows, Apple macOS e Linux", "Chrome OS, Ubuntu e Fedora", "iOS, Android e HarmonyOS"], a: 1},
    {q: "Quali sono i due sistemi operativi principali per tablet e smartphone?", options: ["Windows e macOS", "Android e iOS", "Linux e Chrome OS", "HarmonyOS e Tizen"], a: 1},
    {q: "Quali tipi di programmi sono comunemente utilizzati?", options: ["Solo videogiochi", "Suite di ufficio, programmi di elaborazione immagini, browser Internet e antivirus", "Solo software di editing video", "Solo sistemi operativi"], a: 1},
  
  {q: "Quale può essere un motivo per cui un dispositivo non riesce a collegarsi alla rete Wi-Fi?", options: ["Modalità aereo disattivata", "Password errata o modalità aereo attiva", "Il dispositivo è troppo vicino al router", "La batteria è carica al 100%"], a: 1},
  
  {q: "Qual è lo scopo principale di creare regolarmente copie remote dei dati (backup remoto)?", options: ["Occupare più spazio sul dispositivo", "Proteggere i dati da perdita, guasti hardware o attacchi informatici", "Rallentare il dispositivo", "Condividere i dati con tutti"], a: 1},
  
  {q: "Quale strategia può essere adottata per fronteggiare l’obsolescenza dell’hardware?", options: ["Acquistare sempre nuovi dispositivi ogni anno", "Utilizzare servizi cloud per aumentare potenza di calcolo e capacità di archiviazione", "Ignorare gli aggiornamenti", "Disattivare tutte le funzioni"], a: 1},
  
  {q: "L’utilizzo di dispositivi IoT e mobili dipende principalmente da quali fattori?", options: ["Solo dal prezzo", "Disponibilità della rete, autonomia della batteria e capacità di calcolo", "Solo dal colore del dispositivo", "Solo dalla marca"], a: 1},
  
  {q: "Secondo il syllabus, l’Intelligenza Artificiale:", options: ["Esiste indipendentemente dagli esseri umani", "È addestrata a partire da basi di conoscenza generate dall’attività umana", "Non ha bisogno di dati per funzionare", "È sempre perfetta e senza errori"], a: 1},
  
  {q: "Come si effettua la scansione di un QR Code con un dispositivo mobile?", options: ["Solo con app di terze parti", "Aprendo l’app fotocamera e inquadrando il QR Code (nella maggior parte dei dispositivi moderni)", "Solo tramite computer", "Non è possibile con smartphone"], a: 1},
  
  {q: "Quali gesti si possono utilizzare per interagire con lo smartphone o il tablet?", options: ["Solo tap", "Tap, doppio tap, trascinamento, swipe e pinch to zoom", "Solo clic con mouse", "Solo tastiera fisica"], a: 1},
  
  {q: "Come ci si connette a una rete Wi-Fi su un dispositivo mobile?", options: ["Solo automaticamente", "Andando nelle impostazioni, attivando il Wi-Fi e inserendo la password corretta", "Solo con cavo Ethernet", "Non è necessario inserire la password"], a: 1},
  
  {q: "Quali impostazioni principali si possono configurare su uno smartphone o tablet?", options: ["Solo la suoneria", "Connessioni (Wi-Fi, Bluetooth, NFC, hotspot), interfaccia utente, notifiche e display", "Solo la data e l’ora", "Solo la lingua"], a: 1},
  
  {q: "Cosa si deve fare quando si incontra un problema tecnico?", options: ["Spegnere subito il dispositivo", "Cercare soluzioni su Internet", "Ignorare il problema", "Chiamare immediatamente l’assistenza"], a: 1},
  
  {q: "Come si gestiscono le app dalle impostazioni del dispositivo?", options: ["Non è possibile gestirle", "Si possono aggiornare, disinstallare o forzare la chiusura", "Solo disinstallare", "Solo aggiornare"], a: 1},
  
  {q: "Quali passaggi sono necessari per installare una nuova app?", options: ["Andare sullo store ufficiale, selezionare l’app, scaricarla e accettare le autorizzazioni richieste", "Scaricare direttamente dal browser senza store", "Copiare da un altro telefono", "Non serve accettare nulla"], a: 1},
  
  {q: "Come si connettono due dispositivi diversi tramite Bluetooth?", options: ["Automaticamente senza impostazioni", "Attivando il Bluetooth su entrambi i dispositivi e completando l’abbinamento", "Solo con cavo USB", "Solo tramite Wi-Fi"], a: 1},
  
  {q: "A cosa serve consultare la documentazione ufficiale online?", options: ["Solo per leggere notizie", "Per risolvere problemi tecnici in modo corretto e aggiornato", "Per giocare", "Per guardare video"], a: 1},
  
  {q: "A cosa serve attivare un hotspot sul proprio smartphone?", options: ["Per risparmiare batteria", "Per condividere la connessione Internet con altri dispositivi", "Per migliorare il segnale", "Per disattivare i dati mobili"], a: 1},
  
  {q: "Dove si può effettuare il backup di uno smartphone o tablet?", options: ["Solo sulla scheda SD", "Su cloud (Google Drive, iCloud) o su computer", "Solo sulla SIM", "Non è possibile"], a: 1},
  
  {q: "Quale metodologia si può adottare per ricercare malfunzionamenti tecnici?", options: ["Provare a caso", "Seguire un approccio sistematico: diagnosi, analisi delle cause e test", "Ignorare il problema", "Spegnere e riaccendere"], a: 1},
  
  {q: "Cosa significa l’acronimo BYOD (Bring Your Own Device)?", options: ["Obbligo di usare solo dispositivi aziendali", "Politica che permette di utilizzare i propri dispositivi personali sul luogo di lavoro o studio", "Acquisto obbligatorio di nuovi dispositivi ogni anno", "Divieto di usare dispositivi personali"], a: 1},

{q: "Le funzioni vocali basate su tecnologie di IA permettono principalmente:", options: ["Solo di aumentare il volume", "L’uso di comandi vocali facilitando l’accessibilità per persone con disabilità e un’interazione senza uso delle mani", "Solo di giocare", "Solo di chiamare"], a: 1},
  
  {q: "Cosa si intende per Internet Banking o Online Banking?", options: ["Acquistare prodotti online", "Gestire il conto corrente, effettuare bonifici, pagare bollette e controllare il saldo tramite Internet", "Solo inviare email alla banca", "Solo giocare online"], a: 1},
  
  {q: "Per quali attività principali possono essere utilizzate le app?", options: ["Solo per giocare e guardare video", "Navigazione Internet, produzione documenti, scansione immagini, comunicazione, mappe, lettore PDF e QR code", "Solo per chiamare", "Solo per fotografare"], a: 1},
  
  {q: "Dove è necessario collegarsi per ricercare e installare nuove app su smartphone e tablet?", options: ["Direttamente dal browser", "Su uno store ufficiale specifico come App Store o Google Play Store", "Da qualsiasi sito web", "Tramite chiavetta USB"], a: 1},
  
  {q: "Qual è la differenza principale tra software installato localmente e software in cloud?", options: ["Il software in cloud è sempre più lento", "Il software locale è installato sul dispositivo mentre quello in cloud è accessibile tramite Internet senza installazione", "Non esiste differenza", "Il software locale non richiede aggiornamenti"], a: 1},
  
  {q: "Quali sono alcuni esempi di dispositivi IoT che trasmettono dati?", options: ["Solo computer fissi", "Smartwatch, termostati intelligenti, telecamere di sicurezza, autovelox e sensori di umidità del suolo", "Solo stampanti", "Solo mouse e tastiere"], a: 1},
  
  {q: "Internet offre la possibilità di effettuare:", options: ["Solo transazioni commerciali", "Sia transazioni commerciali (shopping online) che non commerciali (baratto, donazioni, gruppi di acquisto)", "Solo donazioni", "Solo baratto"], a: 1},
  
  {q: "Quali sono alcuni dei principali siti di e-commerce?", options: ["Solo Amazon", "Amazon, eBay, AliExpress e Zalando", "Solo Google", "Solo Facebook Marketplace"], a: 1},
  
  {q: "Cosa è un portafoglio digitale (wallet)?", options: ["Un portafoglio fisico", "Un servizio digitale che permette di memorizzare carte di pagamento e criptovalute per effettuare pagamenti sicuri", "Un’applicazione per giocare", "Un antivirus"], a: 1},
  
  {q: "La crescente quantità di dati prodotti e condivisi dai dispositivi comporta:", options: ["Meno bisogno di privacy", "Necessità di maggiore consapevolezza sulla gestione e protezione dei dati personali", "Riduzione della velocità di Internet", "Meno utilizzo dei dispositivi"], a: 1},
  
  {q: "A cosa servono le stampanti 3D?", options: ["Solo a stampare documenti", "A realizzare oggetti fisici tridimensionali partendo da modelli digitali", "Solo a stampare foto", "A connettersi a Internet"], a: 1},
  
  {q: "Lo sviluppo e la diffusione dell’IoT può generare:", options: ["Solo vantaggi", "Problemi di sicurezza e privacy", "Riduzione dei costi", "Miglioramento automatico"], a: 1},
  
  {q: "I big data rivestono un grande valore per:", options: ["Solo le grandi aziende", "Le organizzazioni e i cittadini", "Solo per divertimento", "Solo per i governi"], a: 1},
  
  {q: "Quali tecnologie assistive migliorano l’accesso ai contenuti online per persone con disabilità visive?", options: ["Solo mouse grandi", "Lettori di schermo e software di ingrandimento", "Solo cuffie", "Solo monitor grandi"], a: 1},
  
  {q: "I comandi vocali per controllare dispositivi digitali sono gestiti tramite:", options: ["Solo hardware", "Intelligenza Artificiale", "Solo Wi-Fi", "Solo Bluetooth"], a: 1},
  
  {q: "Quando si usano applicazioni di traduzione automatica bisogna essere consapevoli che:", options: ["Sono sempre perfette", "Non sempre producono risultati accurati", "Funzionano solo in italiano", "Non servono a nulla"], a: 1},
  
  {q: "Oltre agli acquisti online, Internet permette anche:", options: ["Solo navigare", "Transazioni non commerciali come baratto, donazioni e gruppi di acquisto solidale", "Solo guardare video", "Solo giocare"], a: 1},
  
  {q: "Con l’Internet banking è possibile:", options: ["Solo controllare il saldo", "Controllare saldo, effettuare bonifici, pagare bollette e ricariche", "Solo inviare email", "Solo giocare"], a: 1},
  
  {q: "All’interno di un ambiente di Internet banking si può:", options: ["Solo chiudere il conto", "Accedere agli avvisi e consultare l’archivio dei documenti", "Solo cambiare password", "Solo vedere pubblicità"], a: 1},    

{q: "Le funzioni vocali basate su tecnologie di IA permettono principalmente:", options: ["Solo di aumentare il volume", "L’uso di comandi vocali facilitando l’accessibilità per persone con disabilità e un’interazione senza uso delle mani", "Solo di giocare", "Solo di chiamare"], a: 1},
  
  {q: "Cosa si intende per Internet Banking o Online Banking?", options: ["Acquistare prodotti online", "Gestire il conto corrente, effettuare bonifici, pagare bollette e controllare il saldo tramite Internet", "Solo inviare email alla banca", "Solo giocare online"], a: 1},
  
  {q: "Per quali attività principali possono essere utilizzate le app?", options: ["Solo per giocare e guardare video", "Navigazione Internet, produzione documenti, scansione immagini, comunicazione, mappe, lettore PDF e QR code", "Solo per chiamare", "Solo per fotografare"], a: 1},
  
  {q: "Dove è necessario collegarsi per ricercare e installare nuove app su smartphone e tablet?", options: ["Direttamente dal browser", "Su uno store ufficiale specifico come App Store o Google Play Store", "Da qualsiasi sito web", "Tramite chiavetta USB"], a: 1},
  
  {q: "Qual è la differenza principale tra software installato localmente e software in cloud?", options: ["Il software in cloud è sempre più lento", "Il software locale è installato sul dispositivo mentre quello in cloud è accessibile tramite Internet senza installazione", "Non esiste differenza", "Il software locale non richiede aggiornamenti"], a: 1},
  
  {q: "Quali sono alcuni esempi di dispositivi IoT che trasmettono dati?", options: ["Solo computer fissi", "Smartwatch, termostati intelligenti, telecamere di sicurezza, autovelox e sensori di umidità del suolo", "Solo stampanti", "Solo mouse e tastiere"], a: 1},
  
  {q: "Internet offre la possibilità di effettuare:", options: ["Solo transazioni commerciali", "Sia transazioni commerciali (shopping online) che non commerciali (baratto, donazioni, gruppi di acquisto)", "Solo donazioni", "Solo baratto"], a: 1},
  
  {q: "Quali sono alcuni dei principali siti di e-commerce?", options: ["Solo Amazon", "Amazon, eBay, AliExpress e Zalando", "Solo Google", "Solo Facebook Marketplace"], a: 1},
  
  {q: "Cosa è un portafoglio digitale (wallet)?", options: ["Un portafoglio fisico", "Un servizio digitale che permette di memorizzare carte di pagamento e criptovalute per effettuare pagamenti sicuri", "Un’applicazione per giocare", "Un antivirus"], a: 1},
  
  {q: "La crescente quantità di dati prodotti e condivisi dai dispositivi comporta:", options: ["Meno bisogno di privacy", "Necessità di maggiore consapevolezza sulla gestione e protezione dei dati personali", "Riduzione della velocità di Internet", "Meno utilizzo dei dispositivi"], a: 1},
  
  {q: "A cosa servono le stampanti 3D?", options: ["Solo a stampare documenti", "A realizzare oggetti fisici tridimensionali partendo da modelli digitali", "Solo a stampare foto", "A connettersi a Internet"], a: 1},
  
  {q: "Lo sviluppo e la diffusione dell’IoT può generare:", options: ["Solo vantaggi", "Problemi di sicurezza e privacy", "Riduzione dei costi", "Miglioramento automatico"], a: 1},
  
  {q: "I big data rivestono un grande valore per:", options: ["Solo le grandi aziende", "Le organizzazioni e i cittadini", "Solo per divertimento", "Solo per i governi"], a: 1},
  
  {q: "Quali tecnologie assistive migliorano l’accesso ai contenuti online per persone con disabilità visive?", options: ["Solo mouse grandi", "Lettori di schermo e software di ingrandimento", "Solo cuffie", "Solo monitor grandi"], a: 1},
  
  {q: "I comandi vocali per controllare dispositivi digitali sono gestiti tramite:", options: ["Solo hardware", "Intelligenza Artificiale", "Solo Wi-Fi", "Solo Bluetooth"], a: 1},
  
  {q: "Quando si usano applicazioni di traduzione automatica bisogna essere consapevoli che:", options: ["Sono sempre perfette", "Non sempre producono risultati accurati", "Funzionano solo in italiano", "Non servono a nulla"], a: 1},
  
  {q: "Oltre agli acquisti online, Internet permette anche:", options: ["Solo navigare", "Transazioni non commerciali come baratto, donazioni e gruppi di acquisto solidale", "Solo guardare video", "Solo giocare"], a: 1},
  
  {q: "Con l’Internet banking è possibile:", options: ["Solo controllare il saldo", "Controllare saldo, effettuare bonifici, pagare bollette e ricariche", "Solo inviare email", "Solo giocare"], a: 1},
  
  {q: "All’interno di un ambiente di Internet banking si può:", options: ["Solo chiudere il conto", "Accedere agli avvisi e consultare l’archivio dei documenti", "Solo cambiare password", "Solo vedere pubblicità"], a: 1},

{q: "I comandi vocali utilizzati per controllare dispositivi digitali sono gestiti principalmente tramite:", options: ["Solo hardware dedicato", "Intelligenza Artificiale", "Solo connessione Bluetooth", "Solo Wi-Fi diretto"], a: 1},
  
  {q: "Quali tecnologie assistive sono particolarmente utili per le persone con disabilità visive?", options: ["Solo mouse grandi", "Lettori di schermo e strumenti di ingrandimento dello schermo", "Solo cuffie", "Solo monitor grandi"], a: 1},
  
  {q: "Quale tecnologia viene utilizzata da Google Pay, Samsung Pay e Apple Pay per i pagamenti contactless?", options: ["QR Code", "Tecnologia NFC", "Solo Bluetooth", "Solo GPS"], a: 1},
  
  {q: "Quali applicazioni utilizzano principalmente tecnologia QR Code o geolocalizzazione per i pagamenti?", options: ["Solo carte di credito fisiche", "Bancomat Pay, PayPal e Satispay", "Solo bonifici tradizionali", "Solo contanti"], a: 1},
  
  {q: "Il digitale può supportare l’innovazione creando valore:", options: ["Solo economico", "Sociale, culturale e/o economico", "Solo ludico", "Solo estetico"], a: 1},
  
  {q: "L’Intelligenza Artificiale è un settore:", options: ["Completamente stabile", "In continua evoluzione con impatti ancora da scoprire", "Già concluso", "Solo teorico"], a: 1},
  
  {q: "Come si può parlare ad altre persone (ad esempio anziani o giovani) dell’importanza di riconoscere le fake news?", options: ["Dicendo che non esistono", "Mostrando esempi di fonti affidabili e spiegando come distinguerle", "Dicendo di credere a tutto", "Ignorando l’argomento"], a: 1},
  
  {q: "Quando si spiega l’argomento fake news a persone meno esperte, è utile:", options: ["Usare solo termini tecnici", "Usare esempi semplici e concreti di vita quotidiana", "Non fare esempi pratici", "Dire solo che internet è pericoloso"], a: 1},

  {q: "Quale caratteristica principale distingue un computer fisso da un computer portatile?", options: ["Il computer fisso è più leggero e facile da trasportare", "Il computer fisso ha una torre separata con monitor, tastiera e mouse mentre il portatile integra tutto in un unico dispositivo", "Il portatile non ha batteria", "Il computer fisso non può collegarsi a Internet"], a: 1},
  
  {q: "Quale dispositivo è progettato principalmente per essere trasportato e utilizzato in movimento?", options: ["Computer fisso (desktop)", "Computer portatile (laptop)", "Stampante da tavolo", "Monitor esterno"], a: 1},
  
  {q: "Quale funzione principale ha uno smartphone rispetto a un telefono tradizionale?", options: ["Solo effettuare chiamate vocali", "Eseguire applicazioni, navigare su Internet, scattare foto e gestire e-mail", "Solo inviare SMS", "Solo ascoltare musica"], a: 1},
  
  {q: "Un tablet si distingue principalmente da uno smartphone per:", options: ["Le dimensioni dello schermo generalmente più grandi", "La capacità di effettuare chiamate telefoniche", "Il peso maggiore", "La mancanza di touchscreen"], a: 1},
  
  {q: "Quale sistema operativo è utilizzato principalmente sui dispositivi Apple come iPhone e iPad?", options: ["Android", "Windows", "iOS", "Linux"], a: 2},
  
  {q: "Quale sistema operativo è il più diffuso sui dispositivi mobili di marche diverse come Samsung, Xiaomi e Huawei?", options: ["iOS", "macOS", "Android", "Windows Phone"], a: 2},
  
  {q: "Microsoft Windows, Apple macOS e Linux sono sistemi operativi principalmente per:", options: ["Solo smartphone", "Computer desktop e portatili", "Solo tablet", "Solo stampanti"], a: 1},
  
  {q: "Un antivirus è un tipo di programma utilizzato per:", options: ["Creare documenti", "Proteggere il dispositivo da virus e malware", "Navigare su Internet", "Ascoltare musica"], a: 1},
  
  {q: "Un browser Internet serve principalmente per:", options: ["Creare fogli di calcolo", "Navigare sul World Wide Web e visualizzare pagine web", "Modificare foto", "Gestire la posta elettronica"], a: 1},
  
  {q: "Quale può essere una causa comune per cui un dispositivo non si collega alla rete Wi-Fi?", options: ["La batteria è completamente scarica", "La modalità aereo è attivata o la password inserita è sbagliata", "Il dispositivo è troppo freddo", "Il volume è al massimo"], a: 1},
  
  {q: "Perché è importante creare regolarmente copie di backup dei dati?", options: ["Per occupare più spazio sul dispositivo", "Per proteggere i dati da possibili perdite dovute a guasti, errori o attacchi", "Per rallentare il dispositivo", "Per condividere automaticamente i dati con tutti"], a: 1},
  
  {q: "Cosa significa che un dispositivo è 'sincronizzato' con un altro?", options: ["Che ha la stessa cover", "Che i contatti, foto e documenti sono aggiornati e accessibili su entrambi i dispositivi", "Che ha la stessa marca", "Che consuma meno batteria"], a: 1},
  
  {q: "Quale tecnologia permette di pagare avvicinando lo smartphone al terminale POS senza contatto?", options: ["QR Code", "Tecnologia NFC", "Solo Bluetooth", "Solo Wi-Fi"], a: 1},
  
  {q: "Un hotspot sul proprio smartphone serve per:", options: ["Risparmiare dati mobili", "Condividere la propria connessione Internet con altri dispositivi", "Migliorare la qualità delle foto", "Disattivare il Wi-Fi"], a: 1},
  
  {q: "Cosa si può fare con un QR Code usando lo smartphone?", options: ["Solo fotografarlo", "Scansionarlo per accedere rapidamente a un link, un sito o informazioni", "Solo stamparlo", "Solo inviarlo via email"], a: 1},
  
  {q: "Per aggiornare o disinstallare un’app sul proprio dispositivo si deve andare:", options: ["Nel browser", "Nelle impostazioni del dispositivo nella sezione App", "Nella galleria foto", "Nel calendario"], a: 1},
  
  {q: "Cosa si intende per Bring Your Own Device (BYOD)?", options: ["Obbligo di usare solo dispositivi aziendali", "Politica che permette di portare e usare i propri dispositivi personali sul posto di lavoro o a scuola", "Acquisto di nuovi dispositivi ogni mese", "Divieto di usare smartphone"], a: 1},
  
  {q: "Un portafoglio digitale (wallet) serve principalmente per:", options: ["Conservare soldi fisici", "Memorizzare carte di pagamento e effettuare pagamenti sicuri", "Ascoltare musica", "Giocare"], a: 1},
  
  {q: "Le stampanti 3D servono principalmente per:", options: ["Stampare documenti di testo", "Realizzare oggetti fisici tridimensionali partendo da un modello digitale", "Stampare solo foto", "Connettersi a Internet"], a: 1},
  
  {q: "I dispositivi IoT (Internet of Things) sono:", options: ["Dispositivi che non si collegano a Internet", "Oggetti comuni collegati a Internet che raccolgono e trasmettono dati", "Solo computer fissi", "Solo stampanti"], a: 1},

  {q: "Un utente deve scegliere tra un computer fisso e un portatile per un lavoro che richiede alta potenza di calcolo e frequenti aggiornamenti hardware. Quale dispositivo è più adatto e perché?", options: ["Il portatile, perché è più trasportabile", "Il computer fisso, perché permette di aggiornare facilmente componenti come RAM, scheda video e processore", "Entrambi sono ugualmente adatti", "Il tablet, perché è più leggero"], a: 1},
  
  {q: "Un professionista ha bisogno di un dispositivo per lavorare in mobilità, partecipare a video-riunioni e modificare documenti. Quale tra i seguenti è la scelta più appropriata?", options: ["Computer fisso", "Smartphone", "Computer portatile con buona autonomia e webcam", "Solo tablet senza tastiera"], a: 2},
  
  {q: "Un utente vuole installare un programma professionale di editing video. Cosa deve verificare prima dell’acquisto secondo il syllabus?", options: ["Solo se è gratuito", "Se è compatibile con il suo sistema operativo e se è a pagamento o richiede abbonamento", "Solo il colore dell’icona", "Solo la dimensione del file"], a: 1},
  
  {q: "Perché è utile sincronizzare contatti, foto e documenti tra smartphone, tablet e computer?", options: ["Solo per occupare meno spazio", "Per avere sempre gli stessi dati aggiornati e accessibili da tutti i dispositivi", "Solo per risparmiare batteria", "Solo per condividere con amici"], a: 1},
  
  {q: "Un’azienda utilizza sia computer Windows che Mac. Quale sistema operativo comune permette una buona compatibilità tra i due ambienti?", options: ["Solo Windows", "Solo macOS", "Linux", "Nessuno, sono completamente incompatibili"], a: 2},
  
  {q: "Un utente possiede un tablet e uno smartphone. Quali sistemi operativi sono più probabili su questi dispositivi?", options: ["Entrambi Windows", "Tablet con Windows e smartphone con Linux", "Entrambi Android o iOS a seconda della marca", "Entrambi macOS"], a: 2},
  
  {q: "Un utente deve scegliere un browser per lavoro che richieda buona integrazione con Google Workspace e velocità elevata. Quale è la scelta più indicata?", options: ["Mozilla Firefox", "Apple Safari", "Google Chrome", "Internet Explorer"], a: 2},
  
  {q: "Un dispositivo non si collega alla rete Wi-Fi nonostante la password sia corretta. Quale potrebbe essere una causa frequente secondo il syllabus?", options: ["La modalità aereo è attivata", "Il dispositivo ha poca memoria", "La batteria è al 10%", "Lo schermo è spento"], a: 0},
  
  {q: "Perché è consigliato creare copie remote (backup nel cloud) dei dati con regolarità?", options: ["Per occupare più spazio sul cloud", "Per proteggere i dati da guasti hardware, errori umani, ransomware o furti del dispositivo", "Solo per condividere file con amici", "Per rallentare il dispositivo"], a: 1},
  
  {q: "Un’azienda vuole ridurre i costi legati all’obsolescenza dell’hardware. Quale strategia è consigliata dal syllabus?", options: ["Acquistare sempre nuovi dispositivi ogni anno", "Utilizzare servizi cloud per aumentare potenza di calcolo e archiviazione", "Disattivare tutti gli aggiornamenti", "Usare solo dispositivi usati"], a: 1},

  {q: "Un utente deve risolvere un problema su un dispositivo IoT (es. termostato intelligente) che non risponde. Quale approccio è più corretto?", options: ["Ignorare il problema", "Verificare disponibilità rete, batteria e capacità di calcolo, poi riavviare o aggiornare", "Cambiare subito il dispositivo", "Disattivare tutti i sensori"], a: 1},
  
  {q: "Un’azienda permette ai dipendenti di usare i propri dispositivi personali (BYOD). Quale vantaggio principale offre questa politica?", options: ["Aumento dei costi aziendali", "Maggiore familiarità e produttività dei dipendenti", "Riduzione della sicurezza", "Obbligo di acquisto nuovi dispositivi"], a: 1},
  
  {q: "Un utente vuole effettuare un bonifico e pagare una bolletta senza recarsi in banca. Quale servizio gli permette di farlo comodamente?", options: ["Solo contanti", "Internet Banking / Online Banking", "Solo posta tradizionale", "Solo SMS"], a: 1},
  
  {q: "Un utente deve installare una nuova app per scannerizzare documenti. Dove deve cercarla e cosa deve fare dopo averla trovata?", options: ["Sul browser qualsiasi", "Sullo store ufficiale (App Store o Play Store), scaricarla e accettare le autorizzazioni", "Da un amico via Bluetooth", "Da un sito web non ufficiale"], a: 1},
  
  {q: "Qual è la differenza principale tra software installato localmente e software in cloud?", options: ["Il software in cloud richiede sempre installazione", "Il software locale è installato sul dispositivo, quello in cloud è accessibile via Internet senza installazione locale", "Non esiste differenza", "Il software in cloud è sempre gratuito"], a: 1},
  
  {q: "Quale problema può nascere dalla diffusione massiccia dei dispositivi IoT?", options: ["Solo aumento della velocità di Internet", "Maggiori rischi per la sicurezza e la privacy dei dati", "Riduzione dei costi energetici", "Miglioramento automatico di tutti i dispositivi"], a: 1},
  
  {q: "Un utente vuole acquistare un prodotto online in modo sicuro. Quale sito tra i seguenti è un esempio classico di piattaforma e-commerce?", options: ["Solo Wikipedia", "Amazon o eBay", "Solo Google Maps", "Solo YouTube"], a: 1},
  
  {q: "Cosa è un portafoglio digitale (wallet) e a cosa serve principalmente?", options: ["Un portafoglio fisico per banconote", "Un’applicazione o servizio per memorizzare carte di pagamento e criptovalute per effettuare pagamenti sicuri", "Un antivirus", "Un lettore PDF"], a: 1},
  
  {q: "Perché è importante essere consapevoli della grande quantità di dati prodotti dai nostri dispositivi?", options: ["Perché occupano poco spazio", "Perché richiedono maggiore attenzione alla privacy e alla protezione dei dati personali", "Perché aumentano automaticamente la velocità", "Perché non hanno alcuna importanza"], a: 1},
  
  {q: "Le stampanti 3D permettono di:", options: ["Stampare solo documenti di testo", "Realizzare oggetti fisici tridimensionali personalizzati partendo da modelli digitali", "Solo stampare foto in alta qualità", "Solo connettersi a Internet"], a: 1},

   {q: "Un utente anziano ha difficoltà a leggere i testi sullo schermo del tablet. Quale tecnologia assistive può aiutarlo secondo il syllabus?", options: ["Solo aumentare la luminosità", "Software di ingrandimento dello schermo e lettore vocale", "Solo cambiare il colore dello sfondo", "Solo usare il tablet in modalità orizzontale"], a: 1},
  
  {q: "Un utente vuole pagare un prodotto in negozio senza estrarre la carta di credito. Quale tecnologia gli permette di farlo con lo smartphone?", options: ["Solo QR Code", "Tecnologia NFC con Google Pay, Apple Pay o Samsung Pay", "Solo Bluetooth", "Solo Wi-Fi"], a: 1},
  
  {q: "Un utente ha ricevuto un ordine su un sito di e-commerce. Cosa può fare per sapere dove si trova il pacco?", options: ["Solo aspettare la consegna", "Seguire lo stato dell’ordine e tracciare la spedizione nella sezione apposita", "Chiamare il corriere", "Cancellare l’ordine"], a: 1},
  
  {q: "Un professionista vuole innovare il proprio modo di lavorare. Come possono aiutarlo le tecnologie digitali secondo il syllabus?", options: ["Solo permettendo di giocare", "Supportando collaborazione online, automazione di processi e creazione di nuovi prodotti/servizi", "Solo aumentando la velocità di Internet", "Solo permettendo di guardare film"], a: 1},
  
  {q: "Un utente vuole creare un gruppo su un social network per discutere di un argomento di suo interesse. Quale azione deve compiere?", options: ["Solo scrivere un post", "Creare un gruppo o un canale dedicato", "Solo mettere like ai post altrui", "Solo guardare storie"], a: 1},
  
  {q: "Un utente ha difficoltà con un software creativo. Come può trovare l’app più adatta alle sue esigenze?", options: ["Scaricare tutte le app disponibili", "Cercare e confrontare le app in base alle proprie necessità specifiche", "Chiedere solo agli amici", "Scegliere solo quelle gratuite"], a: 1},
  
  {q: "Un utente vuole migliorare le proprie competenze digitali. Quale strumento può utilizzare per valutare il proprio livello attuale?", options: ["Solo chiedere agli amici", "Strumenti di autovalutazione online o test standardizzati come DigComp", "Solo guardare video", "Non è necessario valutare"], a: 1},
  
  {q: "Un’azienda vuole supportare i dipendenti meno esperti nell’uso delle tecnologie. Quale approccio è consigliato?", options: ["Ignorare il problema", "Organizzare sessioni di formazione e assistenza pratica", "Cambiare tutti i dispositivi", "Ridurre l’uso della tecnologia"], a: 1},

  {q: "Un utente anziano vuole imparare a usare lo smartphone. Come può essere supportato nello sviluppo delle competenze digitali?", options: ["Dicendogli che è troppo tardi", "Fornendo spiegazioni semplici, esempi pratici e assistenza guidata", "Dandogli solo il manuale", "Lasciandolo da solo"], a: 1},
  
  {q: "Un utente ha identificato una lacuna nelle proprie competenze digitali. Quale azione è più efficace per colmarla?", options: ["Ignorarla", "Cercare opportunità di formazione online mirate al proprio fabbisogno", "Cambiare lavoro", "Comprare un nuovo dispositivo"], a: 1},
  
  {q: "Un giovane vuole spiegare a un anziano come riconoscere le fake news. Quale approccio è più efficace?", options: ["Usare termini tecnici complessi", "Mostrare esempi concreti di notizie vere e false e spiegare i criteri di verifica", "Dire solo che internet è pericoloso", "Non spiegare nulla"], a: 1},
  
  {q: "Un utente deve scegliere un’applicazione di Intelligenza Artificiale per redigere report. Cosa deve valutare prima di sceglierla?", options: ["Solo se è gratuita", "Accuratezza, facilità d’uso e limiti dell’applicazione", "Solo il nome", "Solo il colore dell’icona"], a: 1},
  
  {q: "Un professionista vuole utilizzare il digitale per innovare un processo lavorativo. Quale approccio è consigliato?", options: ["Continuare come sempre", "Analizzare come le tecnologie possono automatizzare o migliorare il processo", "Usare solo carta", "Ignorare le tecnologie"], a: 1}
    
];
// --- FINE DATABASE COMPLETO DELLE DOMANDE ---

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
