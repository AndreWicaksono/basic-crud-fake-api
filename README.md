React JS project ini merupakan CRUD API sederhana menggunakan Fake RestAPI (https://github.com/typicode/json-server).
Untuk mengubah port fake API, silahkan ubah pada: services/config.js

Folder 'services' berisi fungsi-fungsi global (post, get) yang dapat digunakan di komponen lain.
Untuk fungsi put & delete belum tersedia secara global karena belum selesai.

Module yang saya gunakan :
- React Router
- Bootstrap & Reactstrap
- Axios


### `yarn start`

Untuk menjalankan web pada development mode.<br>
Buka [http://localhost:3000](http://localhost:3000) untuk menampilkan pada browser.


### `json-server --watch db.json --port 3002`

Untuk menjalankan JSON Fake RestAPI Server dengan port 3002 (sesuai konfigurasi).<br>
