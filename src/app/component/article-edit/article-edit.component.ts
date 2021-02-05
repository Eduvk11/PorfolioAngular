import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.scss'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public is_edit: boolean;
  public page_title: string;
  public url: string;


  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'upload-image',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
    }
  };
  //article_id: any;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.is_edit = true;
    this.page_title = 'Editar árticulo';
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {
    this._articleService.upDate(this.article._id, this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.articleUpdate;

          // Alerta
          swal(
            'Árticulo editado!',
            'El árticulo se ha editado correctamente',
            'success'
          )

          this._router.navigate(['blog/articulo', this.article._id]);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';

        // Alerta
        swal(
          'Edición fallida',
          'El árticulo no se ha editado correctamente',
          'error'
        )
      }
    )
  }

  imageUpload(data) {
    let image_data = JSON.parse(data.response);
    this.article.image = image_data.image;
  }

  getArticle() {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      )
    });
  }

}
