# Project Structure (planned)

- `/src`
  - `/components`
    - `UploadArea` – CSV upload for transactions
    - `SummaryCards` – total spend, number of transactions, etc.
    - `ExpensesTable` – detailed list of transactions
    - `ChartsView` – visualizations with Chart.js
  - `/pages`
    - `DashboardPage` – central view
  - `/hooks`
    - `useTransactions` – load, parse & filter data
  - `/utils`
    - CSV parsing helpers (PapaParse)
    - basic anomaly detection
