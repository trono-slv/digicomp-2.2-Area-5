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
  
  {q: "Un professionista vuole utilizzare il digitale per innovare un processo lavorativo. Quale approccio è consigliato?", options: ["Continuare come sempre", "Analizzare come le tecnologie possono automatizzare o migliorare il processo", "Usare solo carta", "Ignorare le tecnologie"], a: 1},
   { q: "Un professionista vuole utilizzare il digitale per innovare un processo lavorativo. Quale approccio è consigliato?", options: ["Continuare come sempre", "Analizzare come le tecnologie possono automatizzare o migliorare il processo", "Usare solo carta", "Ignorare le tecnologie"], a: 1},

  {q: "Se uno smartphone non si connette al Wi-Fi, qual è il primo controllo utile?", options: ["Verificare se il Wi-Fi è attivo e se la rete è disponibile", "Cambiare subito telefono", "Eliminare tutte le foto", "Disattivare il blocco schermo"], a: 0},

  {q: "Che cosa significa BYOD (Bring Your Own Device)?", options: ["Usare solo dispositivi aziendali", "Portare e usare il proprio dispositivo personale in un contesto di studio o lavoro", "Condividere un solo computer con tutti", "Bloccare l'accesso ai dispositivi mobili"], a: 1},

  {q: "Qual è un vantaggio dell’uso dei comandi vocali basati su IA?", options: ["Rendono più difficile usare i dispositivi", "Possono facilitare accessibilità e uso a mani libere", "Sostituiscono sempre la tastiera", "Servono solo per ascoltare musica"], a: 1},

  {q: "Qual è la differenza principale tra un software installato localmente e uno in cloud?", options: ["Quello locale funziona sul dispositivo, quello in cloud tramite Internet", "Sono sempre identici", "Quello in cloud non salva dati", "Quello locale funziona solo sul telefono"], a: 0},

  {q: "Un docente deve organizzare idee, testi e numeri per un progetto. Quale combinazione di strumenti è più adatta?", options: ["Solo calcolatrice", "Elaboratore testi per descrivere, foglio di calcolo per organizzare dati", "Solo social network", "Solo fotocamera"], a: 1},

  {q: "In quale caso il digitale supporta davvero l’innovazione di un servizio?", options: ["Quando rende il servizio più rapido, accessibile o utile", "Quando complica tutte le procedure", "Quando sostituisce ogni contatto umano senza motivo", "Quando viene usato solo per moda"], a: 0},

  {q: "Quale esempio rappresenta un possibile uso dell’IoT?", options: ["Un termostato intelligente che invia dati e si regola automaticamente", "Un quaderno cartaceo", "Una penna senza componenti digitali", "Una bacheca di sughero"], a: 0},

  {q: "Se una persona incontra spesso difficoltà nell’uso di strumenti digitali, quale spiegazione è più corretta?", options: ["Può esserci un divario di competenze digitali da colmare", "Significa sempre che il dispositivo è rotto", "Vuol dire che Internet non esiste", "Dipende solo dall'età"], a: 0},

  {q: "Qual è un modo efficace per aggiornare le proprie competenze digitali?", options: ["Evitare ogni novità", "Seguire corsi online, tutorial o percorsi di formazione affidabili", "Usare sempre gli stessi strumenti senza imparare altro", "Aspettare che altri risolvano i problemi"], a: 1},

  {q: "Un computer diventa molto lento dopo l'apertura di molti programmi. Qual è la prima azione sensata?", options: ["Riavviare il dispositivo e chiudere i programmi non necessari", "Colpire la tastiera", "Cambiare subito computer", "Staccare Internet per sempre"], a: 0},

  {q: "Se una stampante non stampa, quale controllo iniziale è più utile?", options: ["Verificare alimentazione, collegamento e carta disponibile", "Cambiare subito stampante", "Spegnere il monitor", "Aprire un social network"], a: 0},

  {q: "Qual è un esempio di problema tecnico semplice?", options: ["Password dimenticata", "Creazione di una nuova legge", "Aumento dell'inflazione", "Organizzazione di un viaggio scolastico"], a: 0},

  {q: "Quando conviene usare un servizio cloud invece di salvare tutto solo in locale?", options: ["Quando serve accedere ai file da più dispositivi o condividerli facilmente", "Quando non si vuole più usare Internet", "Solo per stampare documenti cartacei", "Mai, in nessun caso"], a: 0},

  {q: "Un team lavora a distanza sullo stesso documento. Quale soluzione è più adatta?", options: ["Un servizio di collaborazione online con modifica condivisa", "Una chiavetta passata di mano in mano", "Un foglio scritto a penna", "Inviare ogni volta una foto del monitor"], a: 0},

  {q: "Che cosa significa scegliere una tecnologia digitale in base al bisogno?", options: ["Usare lo strumento più adatto allo scopo reale", "Usare sempre il programma più complicato", "Scegliere strumenti a caso", "Evitare ogni valutazione"], a: 0},

  {q: "Per organizzare attività, scadenze e responsabilità di un gruppo, quale strumento digitale è spesso utile?", options: ["Un'app o piattaforma di gestione progetti", "Solo la calcolatrice", "Solo il lettore musicale", "Solo la fotocamera"], a: 0},

  {q: "Quale situazione mostra un uso creativo del digitale?", options: ["Combinare testo, immagini e dati per presentare una soluzione chiara a un problema", "Ripetere sempre la stessa procedura inutile", "Stampare tutto senza motivo", "Evitare ogni sperimentazione"], a: 0},

  {q: "Un lavoratore vuole ridurre gli errori ripetitivi nell'inserimento dati. Quale scelta è più efficace?", options: ["Valutare strumenti digitali che automatizzano parte del processo", "Scrivere tutto due volte a mano", "Ignorare il problema", "Cambiare ufficio"], a: 0},

  {q: "Se un'app non funziona correttamente dopo un aggiornamento, cosa è ragionevole fare per prima cosa?", options: ["Verificare se esiste un nuovo aggiornamento o riavviare l'app", "Buttare il dispositivo", "Disinstallare tutti i programmi", "Cambiare account email"], a: 0},

  {q: "Qual è un vantaggio di conoscere più strumenti digitali per lo stesso compito?", options: ["Poter scegliere la soluzione più adatta al contesto", "Confondersi di più apposta", "Evitare ogni miglioramento", "Usare sempre il meno utile"], a: 0},

  {q: "Quando si parla di innovazione digitale in un'organizzazione, quale obiettivo è corretto?", options: ["Migliorare processi, servizi o prodotti con l'aiuto della tecnologia", "Usare tecnologia solo per sembrare moderni", "Eliminare ogni regola di lavoro", "Sostituire tutto senza analisi"], a: 0},

  {q: "Qual è un segnale che una persona dovrebbe aggiornare le proprie competenze digitali?", options: ["Ha difficoltà frequenti anche in attività digitali di base", "Usa già un computer", "Possiede uno smartphone", "Ha una scrivania ordinata"], a: 0},

  {q: "Per imparare a usare un nuovo software in modo affidabile, quale scelta è preferibile?", options: ["Seguire guida ufficiale, corso o tutorial attendibile", "Provare solo tasti casuali", "Aspettare che si sistemi da solo", "Usarlo senza leggere nulla e senza salvare"], a: 0},

  {q: "Quale esempio rappresenta una risposta tecnologica a un bisogno di accessibilità?", options: ["Usare sintesi vocale o ingrandimento testo per facilitare l'accesso ai contenuti", "Ridurre la leggibilità delle pagine", "Eliminare i sottotitoli", "Complicare la navigazione"], a: 0},

  {q: "Una persona deve raccogliere rapidamente opinioni da molti utenti. Quale strumento può essere adatto?", options: ["Un modulo o questionario online", "Solo un foglio scritto a mano in ufficio", "Una calcolatrice scientifica", "Un programma di disegno"], a: 0},

  {q: "Che cosa aiuta a scegliere tra più strumenti digitali simili?", options: ["Confrontare funzioni, facilità d'uso, costi e compatibilità", "Scegliere il primo nome trovato", "Usare quello con il colore preferito", "Evitare qualunque confronto"], a: 0},

  {q: "Se un file è troppo pesante da inviare via email, quale soluzione è spesso corretta?", options: ["Comprimerlo o condividerlo tramite un servizio cloud", "Stampare il file e fotografarlo", "Cambiare tastiera", "Disattivare il Wi-Fi per inviarlo meglio"], a: 0},

  {q: "Quale comportamento mostra capacità di problem solving digitale?", options: ["Analizzare il problema, fare controlli semplici e provare una soluzione adatta", "Bloccare tutto subito senza verifiche", "Ignorare i messaggi di errore", "Ripetere sempre la stessa azione inutile"], a: 0},

  {q: "Per prendere appunti accessibili e ricercabili durante una riunione, quale scelta è più utile?", options: ["Usare uno strumento digitale che permetta ricerca, modifica e condivisione", "Usare solo fogli sparsi non ordinati", "Registrare tutto senza autorizzazione e basta", "Non prendere appunti"], a: 0},

  {q: "Quale situazione descrive bene il concetto di divario di competenze digitali?", options: ["Una persona non possiede ancora le abilità necessarie per usare bene certi strumenti", "Una batteria scarica", "Una rete Wi-Fi lenta", "Uno schermo troppo luminoso"], a: 0},

  {q: "Un ufficio vuole ridurre i tempi di risposta ai clienti. Quale uso del digitale può aiutare?", options: ["Adottare strumenti di gestione richieste e modelli di risposta organizzati", "Rispondere solo una volta al mese", "Eliminare tutti i canali di contatto", "Usare solo note cartacee sparse"], a: 0},

  {q: "Quale attività favorisce il miglioramento continuo delle competenze digitali?", options: ["Aggiornarsi periodicamente con corsi, pratica e confronto con fonti affidabili", "Usare sempre lo stesso metodo per anni senza verifiche", "Evitare ogni novità", "Aspettare che gli altri facciano tutto"], a: 0},

  {q: "Per scegliere una piattaforma di videoconferenza, quale criterio è rilevante?", options: ["Valutare facilità d'uso, sicurezza, funzioni e compatibilità con i dispositivi", "Scegliere quella con il nome più corto", "Usare la prima senza provarla", "Cambiare piattaforma ogni giorno"], a: 0},

  {q: "Che cosa significa usare il digitale in modo strategico?", options: ["Scegliere strumenti e azioni in funzione di un obiettivo preciso", "Accumulare molte app inutili", "Usare tecnologia senza scopo", "Fare tutto contemporaneamente"], a: 0},

  {q: "Una persona vuole creare un contenuto più efficace per spiegare un'idea. Quale approccio è migliore?", options: ["Usare il formato più adatto, ad esempio testo, tabella, grafico o presentazione", "Scrivere tutto in modo confuso", "Evitare immagini e dati anche quando servono", "Ripetere la stessa frase molte volte"], a: 0},

  {q: "Se una procedura digitale richiede troppo tempo, qual è una domanda utile da porsi?", options: ["Esiste uno strumento o una funzione che può semplificarla?", "Posso renderla più lenta?", "Posso duplicare i passaggi inutilmente?", "Posso evitare di capire il processo?"], a: 0},

  {q: "Quale esempio mostra un uso del digitale per creare valore sociale?", options: ["Offrire un servizio online che rende informazioni utili più accessibili ai cittadini", "Nascondere le informazioni", "Escludere gli utenti con difficoltà", "Complicare volutamente l'accesso"], a: 0},

  {q: "Per affrontare meglio un nuovo strumento digitale sul lavoro, quale atteggiamento è consigliato?", options: ["Essere disponibili ad apprendere e a sperimentare con metodo", "Rifiutare ogni cambiamento a priori", "Usarlo senza alcuna regola", "Aspettare di non poter più evitarlo"], a: 0},

  {q: "Qual è il vantaggio principale di individuare presto una propria lacuna digitale?", options: ["Permette di cercare formazione o supporto adeguati", "Impedisce di imparare", "Rende inutili gli aggiornamenti", "Elimina il bisogno di esercitarsi"], a: 0},
    {q: "Se il browser Internet si blocca spesso, quale controllo iniziale è più opportuno?", options: ["Chiudere le schede inutili e riavviare il browser", "Scollegare per sempre il computer", "Cambiare subito casa", "Spegnere la stampante"], a: 0},

  {q: "Un utente deve scegliere tra tablet e laptop per scrivere documenti lunghi e lavorare su file complessi. Quale scelta è di solito più adatta?", options: ["Laptop", "Smartwatch", "Stampante", "Router"], a: 0},

  {q: "Qual è un esempio di bisogno tecnologico?", options: ["Poter collaborare a distanza sullo stesso file", "Cambiare il colore delle pareti", "Acquistare una scrivania nuova", "Stampare meno senza motivo"], a: 0},

  {q: "Quando una persona confronta più app prima di installarle, quale criterio è corretto?", options: ["Valutare funzioni, affidabilità, compatibilità e facilità d'uso", "Scegliere solo quella con l'icona più bella", "Installarle tutte senza leggere nulla", "Usare solo la meno aggiornata"], a: 0},

  {q: "Un piccolo ufficio vuole ridurre errori nelle prenotazioni. Quale soluzione digitale può aiutare?", options: ["Un calendario condiviso o un sistema di prenotazione digitale", "Un quaderno lasciato incustodito", "Messaggi sparsi senza ordine", "Nessuna registrazione"], a: 0},

  {q: "Che cosa significa risolvere un problema tecnico in modo efficace?", options: ["Individuare la causa probabile e provare soluzioni semplici e appropriate", "Tentare azioni casuali", "Ignorare il problema", "Aspettare sempre che altri intervengano"], a: 0},

  {q: "Un file non si apre perché il programma corretto non è installato. Qual è la risposta più adeguata?", options: ["Verificare il formato del file e usare un software compatibile", "Rinominare il file a caso", "Stampare lo schermo", "Spegnere il Wi-Fi"], a: 0},

  {q: "Per condividere rapidamente aggiornamenti con un gruppo di lavoro, quale strumento è spesso più adatto?", options: ["Una piattaforma di collaborazione o messaggistica organizzata", "Un foglio lasciato sulla porta", "Un album fotografico", "Una calcolatrice"], a: 0},

  {q: "Quale situazione mostra un uso creativo delle tecnologie digitali?", options: ["Creare una presentazione con grafici e immagini per spiegare meglio i dati", "Ripetere sempre lo stesso testo senza adattarlo", "Stampare tutto prima di leggerlo", "Evitare ogni strumento visivo"], a: 0},

  {q: "Se una persona non sa usare una funzione base di uno smartphone, quale comportamento è più utile?", options: ["Consultare guida, tutorial o supporto affidabile", "Provare impostazioni casuali senza capire", "Lasciare il dispositivo spento per giorni", "Cancellare tutti i contatti"], a: 0},

  {q: "Qual è un vantaggio dell'automazione di attività ripetitive?", options: ["Ridurre tempi ed errori in alcuni processi", "Complicare ogni operazione", "Eliminare il bisogno di controllare i risultati", "Rendere impossibile il lavoro di gruppo"], a: 0},

  {q: "Se durante una videoconferenza l'audio non funziona, quale verifica viene prima?", options: ["Controllare volume, microfono e impostazioni audio", "Cambiare subito computer", "Aprire un foglio di calcolo", "Disinstallare la webcam"], a: 0},

  {q: "Quale esempio descrive bene una risposta tecnologica a un bisogno reale?", options: ["Usare un traduttore automatico per comprendere un testo in lingua straniera", "Acquistare software senza sapere a cosa serve", "Usare più strumenti del necessario", "Evitare del tutto il digitale"], a: 0},

  {q: "Un'organizzazione vuole raccogliere dati e visualizzarli in modo chiaro. Quale combinazione è adeguata?", options: ["Foglio di calcolo e grafici", "Solo tastiera virtuale", "Solo scanner", "Solo browser senza dati"], a: 0},

  {q: "Perché è utile riconoscere i propri limiti digitali?", options: ["Per sapere su cosa formarsi o chiedere supporto", "Per evitare di imparare", "Per rinunciare definitivamente agli strumenti digitali", "Per non usare più Internet"], a: 0},

  {q: "Quale scelta aiuta a lavorare meglio con strumenti digitali nuovi?", options: ["Fare pratica graduale e verificare le funzioni principali", "Usarli una volta sola e poi abbandonarli", "Ignorare gli aggiornamenti", "Cambiare strumento ogni ora"], a: 0},

  {q: "Un utente vuole accedere ai propri file da casa e dall'ufficio. Quale soluzione è più adatta?", options: ["Archiviazione cloud sincronizzata", "Solo file stampati", "Solo appunti a mano", "Solo memoria del telefono non sincronizzata"], a: 0},

  {q: "Qual è un buon esempio di innovazione di processo tramite digitale?", options: ["Digitalizzare un flusso di approvazione per renderlo più rapido e tracciabile", "Aggiungere passaggi manuali inutili", "Duplicare i documenti cartacei senza necessità", "Evitare ogni monitoraggio"], a: 0},

  {q: "Per scegliere un'app adatta a persone con esigenze diverse, quale criterio è importante?", options: ["Considerare anche accessibilità e semplicità d'uso", "Scegliere solo quella più complessa", "Usare quella meno chiara possibile", "Evitare qualunque personalizzazione"], a: 0},

  {q: "Quale comportamento mostra apprendimento continuo nel digitale?", options: ["Aggiornarsi nel tempo con formazione e pratica", "Usare sempre e solo procedure vecchie", "Rifiutare ogni nuovo strumento", "Delegare sempre tutto agli altri"], a: 0},

  {q: "Se un documento deve essere firmato e restituito rapidamente, quale soluzione digitale può essere utile?", options: ["Usare uno strumento che consenta compilazione e firma del PDF", "Riscriverlo tutto a mano", "Fotografare solo la copertina", "Cambiare font più volte"], a: 0},

  {q: "Quando si valuta una tecnologia digitale, quale domanda è corretta?", options: ["Risponde davvero al problema che devo risolvere?", "È la più difficile da usare?", "È la più costosa in assoluto?", "Posso usarla senza alcun obiettivo?"], a: 0},

  {q: "Quale esempio riguarda il supporto del digitale all'innovazione di servizi?", options: ["Prenotazioni online più semplici e accessibili per gli utenti", "Eliminazione totale delle informazioni utili", "Aumento volontario dei tempi di attesa", "Uso di moduli incomprensibili"], a: 0},

  {q: "Un collega non sa usare una piattaforma nuova. Qual è un aiuto efficace?", options: ["Mostrare i passaggi essenziali e indicare una guida affidabile", "Dirgli di evitare il lavoro digitale", "Fare tutto al suo posto per sempre", "Cambiare subito piattaforma senza motivo"], a: 0},

  {q: "Qual è un vantaggio di usare modelli o template digitali?", options: ["Velocizzare attività ricorrenti mantenendo una struttura ordinata", "Rendere ogni file più confuso", "Impedire modifiche utili", "Sostituire ogni controllo finale"], a: 0},

  {q: "Se una piattaforma richiede troppo tempo per attività semplici, quale scelta è sensata?", options: ["Valutare se esistono strumenti più efficienti per lo stesso compito", "Continuare senza mai verificare alternative", "Aggiungere passaggi inutili", "Stampare ogni schermata"], a: 0},

  {q: "Che cosa caratterizza un uso strategico del cloud?", options: ["Usarlo quando serve accesso, condivisione o sincronizzazione tra dispositivi", "Usarlo solo perché è di moda", "Usarlo per evitare ogni backup", "Usarlo senza controllare lo spazio disponibile"], a: 0},

  {q: "Un cittadino usa servizi digitali pubblici ma trova difficoltà ricorrenti. Qual è una possibile causa?", options: ["Un divario di competenze digitali da colmare", "L'inesistenza dei servizi", "Il fatto che il computer sia sempre inutile", "L'obbligo di usare solo carta"], a: 0},

  {q: "Quale attività aiuta a capire se una soluzione digitale funziona davvero?", options: ["Verificare i risultati ottenuti rispetto all'obiettivo iniziale", "Usarla senza osservare gli effetti", "Cambiarla ogni giorno senza criterio", "Ignorare i feedback"], a: 0},

  {q: "Per migliorare un processo grazie al digitale, quale approccio è corretto?", options: ["Osservare il problema, definire il bisogno e scegliere uno strumento coerente", "Partire dallo strumento senza sapere il problema", "Copiare soluzioni a caso", "Evitare ogni analisi preliminare"], a: 0},
    {q: "Se un'app si chiude improvvisamente più volte, quale azione iniziale è più corretta?", options: ["Riavviare il dispositivo e verificare eventuali aggiornamenti dell'app", "Eliminare tutti i file personali", "Spegnere il router anche se non c'entra", "Cambiare subito dispositivo"], a: 0},

  {q: "Un lavoratore deve scegliere uno strumento per riunioni online con condivisione schermo. Quale criterio conta di più?", options: ["Che supporti videoconferenza, audio e condivisione documenti", "Che abbia solo uno sfondo colorato", "Che funzioni solo offline", "Che non permetta a nessuno di partecipare"], a: 0},

  {q: "Quale situazione rappresenta un problema tecnico digitale?", options: ["Il microfono non viene rilevato durante una riunione online", "Una sedia è scomoda", "L'ufficio è chiuso", "Il tavolo è troppo grande"], a: 0},

  {q: "Per migliorare l'efficienza di un'attività ripetitiva, quale soluzione è spesso più adatta?", options: ["Valutare se può essere automatizzata con uno strumento digitale", "Ripeterla manualmente sempre allo stesso modo", "Aumentare i passaggi inutili", "Evitare di analizzare il processo"], a: 0},

  {q: "Qual è un esempio di tecnologia scelta in base a un bisogno concreto?", options: ["Usare una checklist condivisa online per coordinare le attività di un team", "Installare programmi casuali", "Usare un software complesso senza scopo", "Scegliere lo strumento con il nome più lungo"], a: 0},

  {q: "Se un allegato e-mail è troppo grande per l'invio, quale alternativa è sensata?", options: ["Condividerlo tramite cloud con link di accesso", "Inviarlo decine di volte uguale", "Cambiare tastiera", "Stampare il file e fotografarlo"], a: 0},

  {q: "Un utente vuole ridurre gli errori nell'inserimento dati. Quale approccio digitale può aiutare?", options: ["Usare moduli con campi strutturati e controlli automatici", "Scrivere dati in modo libero e disordinato", "Evitare ogni verifica", "Trascrivere tutto più volte a mano"], a: 0},

  {q: "Quale comportamento dimostra una buona capacità di risolvere problemi tecnici?", options: ["Procedere per verifiche semplici prima di passare a soluzioni più complesse", "Provare azioni casuali senza criterio", "Ignorare i messaggi di errore", "Aspettare sempre senza fare controlli"], a: 0},

  {q: "Per scegliere un dispositivo adatto al lavoro in mobilità, quale elemento è particolarmente rilevante?", options: ["Autonomia, portabilità e compatibilità con le attività da svolgere", "Solo il colore della custodia", "Solo il volume degli altoparlanti", "Solo il nome commerciale"], a: 0},

  {q: "Quale opzione descrive meglio un uso creativo delle tecnologie digitali?", options: ["Combinare diversi strumenti per progettare una soluzione utile a un problema reale", "Usare un solo strumento anche quando non basta", "Ripetere sempre procedure inefficaci", "Evitare ogni sperimentazione"], a: 0},

  {q: "Se una persona ha difficoltà ricorrenti con servizi online, quale passo è utile?", options: ["Individuare le competenze mancanti e cercare formazione mirata", "Smettere definitivamente di usare il digitale", "Cambiare continuamente password senza motivo", "Usare solo supporti cartacei"], a: 0},

  {q: "In un processo lavorativo, quale beneficio può portare una dashboard digitale?", options: ["Monitorare dati e avanzamento in modo più chiaro", "Nascondere tutte le informazioni", "Sostituire ogni decisione umana senza controllo", "Rendere più difficile leggere i risultati"], a: 0},

  {q: "Se una connessione video è instabile durante una call, quale verifica è sensata?", options: ["Controllare rete, qualità del segnale e applicazioni che consumano banda", "Disattivare la tastiera", "Aprire più video contemporaneamente", "Cambiare sfondo più volte"], a: 0},

  {q: "Qual è un esempio di innovazione di servizio tramite digitale?", options: ["Consentire agli utenti di prenotare online in autonomia", "Obbligare tutti a recarsi sempre allo sportello", "Rendere disponibili solo moduli cartacei", "Eliminare ogni tracciamento delle richieste"], a: 0},

  {q: "Quando si confrontano più soluzioni digitali, quale criterio è corretto?", options: ["Valutare se rispondono al bisogno, sono usabili e sostenibili nel contesto", "Scegliere quella più famosa senza analisi", "Scegliere la prima trovata", "Usarle tutte insieme senza criterio"], a: 0},

  {q: "Qual è un vantaggio di usare strumenti digitali condivisi per un gruppo di lavoro?", options: ["Favorire aggiornamenti coordinati e ridurre versioni duplicate", "Creare più confusione possibile", "Impedire la collaborazione", "Eliminare ogni responsabilità individuale"], a: 0},

  {q: "Un dipendente deve imparare una nuova piattaforma. Quale metodo è più efficace?", options: ["Seguire tutorial affidabili e fare esercitazioni pratiche", "Usarla senza leggere nulla e sperare", "Evitarla il più possibile", "Cambiare piattaforma ogni giorno"], a: 0},

  {q: "Quale domanda aiuta a valutare una soluzione tecnologica?", options: ["Risolve davvero il problema con il minor sforzo ragionevole?", "È la più difficile da comprendere?", "È quella con più pulsanti?", "Può essere usata senza alcun obiettivo?"], a: 0},

  {q: "Se più persone devono inserire dati in tempo reale, quale strumento è generalmente più adatto?", options: ["Un documento o foglio condiviso online", "Un file salvato su un solo PC non accessibile agli altri", "Un foglio scritto a matita", "Un'immagine inviata una volta sola"], a: 0},

  {q: "Quale comportamento mostra consapevolezza del proprio divario di competenze digitali?", options: ["Riconoscere ciò che non si sa fare e cercare supporto o formazione", "Negare ogni difficoltà", "Usare strumenti a caso", "Evitare ogni aggiornamento"], a: 0},

  {q: "Un'organizzazione vuole ridurre i tempi di risposta agli utenti. Quale uso del digitale può aiutare?", options: ["Implementare ticketing, FAQ o automazioni semplici", "Aumentare i passaggi manuali", "Usare solo telefono senza registrare nulla", "Ignorare le richieste ripetitive"], a: 0},

  {q: "Qual è un esempio di scelta tecnologica poco efficace?", options: ["Adottare un software molto complesso per un bisogno molto semplice", "Usare uno strumento proporzionato al compito", "Confrontare più opzioni prima di decidere", "Verificare compatibilità e costi"], a: 0},

  {q: "Perché è utile testare una soluzione digitale prima di adottarla stabilmente?", options: ["Per verificare se funziona bene nel contesto reale", "Per perdere tempo volutamente", "Per evitare ogni confronto con gli utenti", "Per impedire miglioramenti successivi"], a: 0},

  {q: "Quale esempio riguarda l'accessibilità come criterio di scelta tecnologica?", options: ["Preferire uno strumento utilizzabile anche da persone con esigenze diverse", "Scegliere quello con testo più piccolo possibile", "Ignorare completamente l'usabilità", "Usare solo interfacce complicate"], a: 0},

  {q: "Se una persona dimentica spesso i passaggi di una procedura digitale, quale aiuto è adatto?", options: ["Creare una guida rapida o checklist", "Cambiare procedura ogni volta", "Evitare di prendere appunti", "Cancellare i promemoria"], a: 0},

  {q: "Quale situazione mostra l'uso del digitale per creare valore economico o sociale?", options: ["Ottimizzare un servizio rendendolo più rapido e accessibile", "Aumentare volutamente errori e ritardi", "Complicare ogni attività semplice", "Impedire agli utenti di completare le operazioni"], a: 0},

  {q: "Se una piattaforma online non è intuitiva, quale azione è utile prima di abbandonarla?", options: ["Verificare se esistono guida, formazione o impostazioni che ne migliorano l'uso", "Escluderla subito senza analisi", "Cambiare monitor", "Stampare la homepage"], a: 0},

  {q: "Quale pratica favorisce l'aggiornamento continuo delle competenze digitali?", options: ["Seguire periodicamente corsi, tutorial o risorse affidabili", "Usare sempre e solo ciò che si conosce già", "Ignorare ogni novità", "Delegare sempre ad altri l'apprendimento"], a: 0},

  {q: "Un team ha problemi con versioni diverse dello stesso file. Quale soluzione è appropriata?", options: ["Usare un archivio condiviso con controllo centralizzato delle versioni", "Inviare ogni modifica con nomi casuali", "Stampare ogni bozza", "Salvare file diversi senza criterio"], a: 0},

  {q: "Quale approccio è più corretto quando si introduce una nuova tecnologia in un processo?", options: ["Partire dai bisogni reali, testare la soluzione e valutarne i risultati", "Scegliere la tecnologia prima di capire il problema", "Cambiare tutto senza spiegazioni", "Usare lo strumento solo perché è nuovo"], a: 0},
    q: "Se il computer non rileva una periferica USB, quale controllo iniziale è più corretto?", options: ["Verificare il collegamento, provare un'altra porta e controllare se il dispositivo è compatibile", "Sostituire subito il computer", "Spegnere il monitor", "Cambiare lo sfondo del desktop"], a: 0},

  {q: "Un professionista deve raccogliere dati da colleghi che lavorano in sedi diverse. Quale soluzione digitale è generalmente più adatta?", options: ["Un modulo online condiviso", "Un foglio cartaceo spedito per posta", "Messaggi vocali non organizzati", "Un file salvato solo sul proprio PC"], a: 0},

  {q: "Quale situazione indica un bisogno tecnologico reale?", options: ["Ridurre il tempo necessario per gestire richieste ripetitive", "Cambiare tastiera senza motivo", "Aprire più finestre possibile", "Complicare un'attività semplice"], a: 0},

  {q: "Se una videoconferenza ha audio disturbato, quale azione è sensata fare per prima?", options: ["Controllare microfono, cuffie e impostazioni audio", "Stampare la schermata della riunione", "Chiudere tutti i documenti cartacei", "Disinstallare la stampante"], a: 0},

  {q: "Qual è un esempio di uso creativo delle tecnologie digitali?", options: ["Combinare grafici, testo e immagini per spiegare un progetto in modo più efficace", "Scrivere sempre lo stesso contenuto senza adattarlo", "Evitare ogni supporto visivo", "Usare solo carta anche quando non serve"], a: 0},

  {q: "Quando una persona riconosce di non saper usare bene un nuovo software, quale comportamento è corretto?", options: ["Cercare tutorial, formazione o supporto", "Negare il problema", "Continuare a usarlo in modo casuale", "Smettere definitivamente di apprendere"], a: 0},

  {q: "Se una procedura digitale richiede molti passaggi ripetitivi, quale approccio è consigliato?", options: ["Valutare se alcune fasi possono essere semplificate o automatizzate", "Aggiungere altri passaggi", "Ripeterla senza mai analizzarla", "Convertirla sempre in procedura cartacea"], a: 0},

  {q: "Quale criterio è importante nella scelta di uno strumento per lavoro collaborativo?", options: ["Che consenta accesso condiviso, aggiornamento e tracciabilità", "Che abbia solo un logo accattivante", "Che sia il più difficile da usare", "Che impedisca modifiche a tutti"], a: 0},

  {q: "Se una pagina web non si carica correttamente, quale verifica iniziale è appropriata?", options: ["Controllare la connessione e aggiornare la pagina", "Cambiare il nome del file sul desktop", "Stampare il browser", "Riavviare la tastiera"], a: 0},

  {q: "Quale situazione rappresenta un divario di competenze digitali?", options: ["Non sapere usare un servizio online necessario per il proprio lavoro", "Avere troppe penne sulla scrivania", "Usare una sedia regolabile", "Avere uno schermo pulito"], a: 0},

  {q: "Per gestire meglio le richieste dei clienti, quale soluzione digitale può essere utile?", options: ["Un sistema di ticket o tracciamento delle richieste", "Un quaderno non condiviso", "Messaggi sparsi senza ordine", "Una pila di fogli senza classificazione"], a: 0},

  {q: "Che cosa significa individuare una risposta tecnologica adeguata?", options: ["Scegliere uno strumento coerente con il bisogno da soddisfare", "Scegliere il software più costoso", "Usare più strumenti possibili senza criterio", "Evitare qualsiasi confronto tra soluzioni"], a: 0},

  {q: "Se una stampante di rete non risponde, quale verifica è più sensata?", options: ["Controllare connessione, stato della stampante e coda di stampa", "Cambiare browser Internet", "Spegnere il mouse", "Aprire un foglio di calcolo"], a: 0},

  {q: "Quale scelta mostra un uso strategico del digitale?", options: ["Adottare uno strumento che riduce errori e migliora l'organizzazione del lavoro", "Usare strumenti casuali", "Scegliere solo in base al colore", "Evitare ogni innovazione"], a: 0},

  {q: "Perché è utile confrontare più strumenti digitali prima di adottarne uno?", options: ["Per valutare quale risponde meglio al contesto e agli obiettivi", "Per perdere tempo", "Per scegliere quello con il nome più lungo", "Per usare strumenti incompatibili"], a: 0},

  {q: "Un file condiviso crea confusione perché esistono molte copie diverse. Quale soluzione è più adatta?", options: ["Usare una piattaforma condivisa con versione centralizzata", "Salvare sempre nuove copie con nomi casuali", "Stampare tutte le versioni", "Inviare foto del file"], a: 0},

  {q: "Quale attività aiuta a colmare un divario di competenze digitali?", options: ["Fare pratica guidata su attività reali", "Evitare di usare la tecnologia", "Delegare sempre ad altri", "Cambiare continuamente strumento"], a: 0},

  {q: "Se un'applicazione richiede autorizzazioni che non sembrano necessarie, quale comportamento è prudente?", options: ["Valutare se l'app è davvero adatta e se le autorizzazioni sono proporzionate", "Accettare tutto senza leggere", "Installare subito altre app simili", "Ignorare ogni impostazione"], a: 0},

  {q: "Qual è un esempio di innovazione digitale in un servizio?", options: ["Consentire prenotazioni online con conferma automatica", "Richiedere sempre la presenza fisica senza motivo", "Eliminare i promemoria", "Complicare i moduli volontariamente"], a: 0},

  {q: "Quando si introduce una nuova piattaforma in ufficio, quale approccio è corretto?", options: ["Prevedere istruzioni, test iniziale e supporto agli utenti", "Imporla senza spiegazioni", "Cambiarla ogni settimana", "Usarla senza configurarla"], a: 0},

  {q: "Se durante una riunione online il video si blocca spesso, quale intervento può aiutare?", options: ["Ridurre il consumo di banda chiudendo applicazioni non necessarie", "Aprire altri video in streaming", "Accendere la stampante", "Cambiare il nome del Wi-Fi"], a: 0},

  {q: "Quale criterio è rilevante per scegliere uno strumento digitale accessibile?", options: ["Che sia utilizzabile da persone con esigenze diverse", "Che abbia testo molto piccolo", "Che richieda solo scorciatoie non documentate", "Che renda difficile la lettura"], a: 0},

  {q: "Un utente ripete spesso gli stessi errori in una procedura digitale. Quale soluzione semplice può aiutare?", options: ["Preparare una guida rapida con i passaggi essenziali", "Cambiare procedura ogni giorno", "Non annotare nulla", "Usare istruzioni sempre più lunghe e confuse"], a: 0},

  {q: "Che cosa dimostra una buona capacità di problem solving digitale?", options: ["Analizzare il problema e testare soluzioni in ordine logico", "Provare azioni casuali", "Ignorare i sintomi", "Aspettare sempre che il problema sparisca da solo"], a: 0},

  {q: "Se un team deve monitorare lo stato delle attività, quale strumento può essere utile?", options: ["Una bacheca digitale condivisa o dashboard di progetto", "Un foglio personale non accessibile agli altri", "Un documento cartaceo chiuso in un cassetto", "Una foto inviata una sola volta"], a: 0},

  {q: "Quale situazione mostra un uso poco efficace della tecnologia?", options: ["Usare un software complesso per un'attività che richiede una soluzione semplice", "Scegliere uno strumento adeguato al compito", "Testare una soluzione prima dell'adozione", "Formare gli utenti coinvolti"], a: 0},

  {q: "Per migliorare la qualità di una soluzione digitale adottata, quale passaggio è utile?", options: ["Raccogliere feedback dagli utenti e apportare correzioni", "Lasciarla invariata anche se non funziona", "Cambiarla senza valutazione", "Ignorare completamente i risultati"], a: 0},

  {q: "Qual è un vantaggio di riconoscere tempestivamente una propria difficoltà digitale?", options: ["Permette di intervenire con formazione o supporto mirato", "Rende inutile qualsiasi apprendimento", "Impedisce di usare strumenti digitali", "Obbliga a tornare sempre alla carta"], a: 0},

  {q: "Se un'organizzazione vuole ridurre errori nella compilazione di dati, quale scelta è appropriata?", options: ["Usare campi guidati, controlli automatici e moduli digitali strutturati", "Accettare inserimenti completamente casuali", "Trascrivere più volte a mano", "Eliminare ogni controllo"], a: 0},

  {q: "Quale approccio è più corretto quando si valuta una tecnologia nuova?", options: ["Partire dal problema reale e verificare se la tecnologia lo risolve in modo efficace", "Adottarla solo perché è recente", "Sceglierla senza confronti", "Usarla anche se non serve"], a: 0},
 {q: "Se una pagina web non si carica correttamente, quale verifica iniziale è più appropriata?", options: ["Aggiornare la pagina e controllare la connessione Internet", "Cambiare tastiera", "Spegnere il monitor", "Stampare la schermata"], a: 0},

  {q: "Quale soluzione è più adatta per condividere file aggiornati con un gruppo di lavoro?", options: ["Usare uno spazio cloud condiviso", "Inviare ogni volta file diversi senza criterio", "Salvare tutto solo su chiavetta personale", "Stampare sempre i documenti"], a: 0},

  {q: "Quale caso rappresenta un bisogno tecnologico concreto?", options: ["Ridurre errori nella raccolta dei dati", "Cambiare icone sul desktop", "Aumentare il numero di password inutili", "Aprire più programmi possibile"], a: 0},

  {q: "Se un'applicazione smette di rispondere, quale azione iniziale è sensata?", options: ["Attendere qualche secondo e, se necessario, chiuderla e riaprirla", "Sostituire subito il computer", "Formattare il disco immediatamente", "Disinstallare tutte le altre app"], a: 0},

  {q: "Qual è un esempio di uso creativo delle tecnologie digitali?", options: ["Creare un'infografica per presentare dati complessi in modo chiaro", "Copiare sempre lo stesso testo", "Usare solo documenti cartacei", "Evitare immagini e grafici anche quando utili"], a: 0},

  {q: "Quale comportamento aiuta a colmare un divario di competenze digitali?", options: ["Seguire tutorial o corsi mirati", "Ignorare il problema", "Usare strumenti a caso", "Evitare qualsiasi aggiornamento"], a: 0},

  {q: "Se una stampante è accesa ma non stampa, quale controllo iniziale è corretto?", options: ["Verificare la coda di stampa e lo stato della connessione", "Cambiare browser", "Ridurre il volume del PC", "Chiudere la cartella documenti"], a: 0},

  {q: "Quale criterio è importante nella scelta di uno strumento digitale?", options: ["Adeguatezza rispetto al compito da svolgere", "Colore dell'icona", "Numero di effetti grafici", "Difficoltà di utilizzo"], a: 0},

  {q: "Se durante una riunione online il video si blocca spesso, quale intervento può essere utile?", options: ["Chiudere altre applicazioni che consumano banda", "Aprire altri video in streaming", "Stampare la chat", "Disattivare la tastiera"], a: 0},

  {q: "Quale situazione segnala un possibile gap di competenze digitali?", options: ["Non saper usare una piattaforma essenziale per il proprio lavoro", "Avere un monitor piccolo", "Usare una scrivania condivisa", "Lavorare vicino a una finestra"], a: 0},

  {q: "Per migliorare un processo ripetitivo, quale approccio è più corretto?", options: ["Valutare se può essere semplificato o automatizzato", "Aggiungere passaggi non necessari", "Ripeterlo senza analizzarlo", "Renderlo più complesso"], a: 0},

  {q: "Quale soluzione riduce il rischio di lavorare su versioni sbagliate dello stesso file?", options: ["Usare un documento condiviso centralizzato", "Salvare copie con nomi casuali", "Stampare ogni modifica", "Inviare foto del testo"], a: 0},

  {q: "Se non si ricorda come usare una funzione di un software, quale scelta è più appropriata?", options: ["Consultare la guida ufficiale o la documentazione", "Provare comandi casuali", "Disinstallare il programma", "Ignorare la funzione"], a: 0},

  {q: "Quale opzione descrive meglio una risposta tecnologica adeguata?", options: ["Uno strumento che risolve un problema reale in modo efficace", "Uno strumento scelto solo perché nuovo", "Uno strumento complesso ma inutile", "Uno strumento usato senza obiettivi"], a: 0},

  {q: "Quale attività è utile dopo aver adottato una nuova soluzione digitale?", options: ["Verificare se ha migliorato davvero il lavoro", "Lasciarla invariata senza controlli", "Cambiarla subito senza test", "Ignorare i risultati ottenuti"], a: 0},

  {q: "Se un file è troppo grande per essere allegato a una e-mail, quale scelta è generalmente corretta?", options: ["Condividerlo tramite link cloud", "Inviarlo in molte copie separate", "Trascriverlo a mano", "Convertirlo sempre in immagine"], a: 0},

  {q: "Qual è un vantaggio di riconoscere tempestivamente i propri limiti digitali?", options: ["Permette di cercare formazione mirata", "Rende inutile imparare", "Blocca l'uso della tecnologia", "Elimina ogni bisogno di supporto"], a: 0},

  {q: "Quale comportamento favorisce l'innovazione digitale efficace?", options: ["Testare gli strumenti prima di adottarli stabilmente", "Usare qualsiasi novità senza valutarla", "Cambiare piattaforma ogni giorno", "Scegliere sempre la soluzione più costosa"], a: 0},

  {q: "Se il microfono non funziona in videoconferenza, quale controllo iniziale è corretto?", options: ["Verificare dispositivo selezionato e autorizzazioni audio", "Stampare il link della riunione", "Riordinare il desktop", "Chiudere il calendario"], a: 0},

  {q: "Quale esempio mostra un uso efficace del digitale nel lavoro?", options: ["Usare moduli digitali con campi guidati per ridurre errori", "Raccogliere dati in modo disordinato", "Duplicare manualmente ogni informazione", "Evitare qualsiasi standardizzazione"], a: 0}
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
