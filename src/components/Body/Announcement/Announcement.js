import React from 'react';

import Card from 'react-bootstrap/Card';
import './Announcement.css';

const announcementCard = () => (
   <div>
    <span id="maincontent"></span>
    <div id="site-news-forum">
        <h2>Pengumuman Akademis</h2>
    </div>
    <Card border="secondary" style={{ width: '100%' }} className="calendar">
        <Card.Header>Calendar</Card.Header>
        <Card.Body className="calendar">
         <p>

Kepada seluruh mahasiswa calon lulusan semester gasal 2020/2021,

Perpustakaan pusat  akan membuka sesi untuk penjelasan mengenai syarat-syarat ujian atau wisuda mahasiswa UI yang berkaitan dengan Perpustakaan UI, yakni: unggah, uji kemiripan dokumen, dan SKBPP.

Mengingat saat ini adalah masa-masa dimana calon lulusan sedang memerlukan 3 layanan ini, dihimbau kepada calon lulusan yang sedang mengurus persyaratan ujian atau wisuda untuk dapat bergabung pada acara tersebut.

Informasi lengkap dapat dilihat pada gambar di bawah ini.

Terima kasih.

 

--Sekretariat Akademik
         </p>
        </Card.Body>
      </Card>
      </div> 
    );
export default announcementCard;