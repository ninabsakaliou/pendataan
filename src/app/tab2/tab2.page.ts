import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule
  ]
})
export class Tab2Page implements OnInit {

  nama: string = '';
  nik: string = '';
  status: string = '';
  agama: string = '';
  jeniskelamin: string = '';
  alamat: string = '';
  pekerjaan: string = '';

  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProvider,
  ) {

  }

  ngOnInit() {
  }

  async addRegister() {
    if (this.nama == '') {
      const toast = await this.toastController.create({
        message: 'Nama lengkap harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.nik == '') {
      const toast = await this.toastController.create({
        message: 'Nik harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.status == '') {
      const toast = await this.toastController.create({
        message: 'status harus di isi',
        duration: 2000
      });
      toast.present();

    } else if (this.agama == '') {
      const toast = await this.toastController.create({
        message: 'Password harus di isi',
        duration: 2000
      });
      toast.present();

    } else if (this.jeniskelamin == '') {
      const toast = await this.toastController.create({
        message: 'jenis kelamin harus di isi',
        duration: 2000
      });
      toast.present();

      } else if (this.alamat == '') {
      const toast = await this.toastController.create({
        message: 'alamat harus di isi',
        duration: 2000
      });
      toast.present();
      
      } else if (this.pekerjaan == '') {
      const toast = await this.toastController.create({
        message: ' harus di isi',
        duration: 2000
      });  
    } else {
      let body = {
        nama: this.nama,
        nik: this.nik,
        status: this.status,
        agama: this.agama,
        jeniskelamin: this.jeniskelamin,
        alamat: this.alamat,
        pekerjaan: this.pekerjaan,
        aksi: 'add_register'
      };
      this.postPvdr.postData(body, 'action.php').subscribe(async data => {
        var alertpesan = data.msg;
        if (data.success) {
          this.router.navigate(['/tab4']);
          const toast = await this.toastController.create({
            message: 'Selamat! Registrasi alumni sukses.',
            duration: 2000
          });
          toast.present();
        } else {
          const toast = await this.toastController.create({
            message: alertpesan,
            duration: 2000
          });
          toast.present();
        }

      });

    }
  }
}