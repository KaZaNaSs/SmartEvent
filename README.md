
# SmartEvent 🎉

SmartEvent est une application web complète de gestion d’événements, développée en ASP.NET Core (Back-end) avec React.js (Front-end). Elle permet à des utilisateurs de :

- Consulter une liste d’événements
- Voir les détails d’un événement
- S’inscrire à un événement
- Et aux administrateurs : créer, modifier, supprimer des événements et consulter les inscriptions

---

## 📁 Structure du projet

```
SmartEvent/
│
├── SmartEvent.API/                 # API Web ASP.NET Core (N-Tier)
├── SmartEvent.Core/                # Modèles & interfaces
├── SmartEvent.Data/                # Accès aux données EF Core
├── SmartEvent.Services/            # Logique métier
├── SmartEvent.RegistrationService/ # (optionnel - version SOA)
├── frontend/                       # Application React
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
└── README.md
```

---

## 🚀 Technologies utilisées

- Backend : ASP.NET Core 6+, Entity Framework Core, SQL Server
- Frontend : React.js, React Router, Bootstrap
- Architecture : N-Tier (avec une version SOA possible)

---

## ⚙️ Installation & utilisation

### Prérequis

- .NET SDK 6 ou 7
- Node.js & npm
- SQL Server Express ou local

### 1. Cloner le projet

```bash
git clone https://github.com/votre-utilisateur/SmartEvent.git
cd SmartEvent
```

### 2. Configuration de la base de données

Dans SmartEvent.API/appsettings.json :

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost\SQLEXPRESS;Database=SmartEventDB;Trusted_Connection=True;"
}
```

Exécute ensuite la migration EF Core :

```bash
cd SmartEvent.API
dotnet ef database update
```

### 3. Lancer l’API

```bash
dotnet run --project SmartEvent.API
```

Par défaut : http://localhost:5053

(Si tu utilises la version SOA, lance aussi SmartEvent.RegistrationService)

### 4. Lancer le Frontend

```bash
cd frontend
npm install
npm start
```

Par défaut : http://localhost:3000

---

## 🧪 Tests

Tu peux tester l’API via Swagger :

http://localhost:5053/swagger

---

## 📌 Fonctionnalités

- ✅ Liste des événements
- ✅ Détail et formulaire d’inscription
- ✅ Ajout / Modification / Suppression d’événements (admin)
- ✅ Liste des participants par événement (admin)

---

## 👨‍💻 Auteurs

- Projet réalisé dans le cadre d’un cours ou d’une évaluation
- Étudiant(e) : Ton Nom
- Encadrant : Nom de l’enseignant
