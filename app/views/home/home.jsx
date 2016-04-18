import React from 'react';

import '../../assets/css/homepage.css';
import '../../assets/css/homepage-login.css';
import '../../assets/css/homepage-register.css';
import '../../assets/css/search.css';
import img_who1 from '../../assets/img/who1.png';
import img_who2 from '../../assets/img/who2.png';
import img_who3 from '../../assets/img/who3.png';
import img_why1 from'../../assets/img/why1.png';
import img_why2 from '../../assets/img/why2.png';
import img_why3 from'../../assets/img/why3.png';

export default React.createClass({
	render() {
		return(
			<div className="container-fluid">
				<div className="row nav bg-brown homepage">
					<div className="col-md-5 col-md-offset-7">
						<form role="form" className="form-group margin-login">
							<div className="col-md-5">
								<label className="control-label white">Email</label>
								<input className="form-control form-group" type="email" required />
							</div>
							<div className="col-md-5">
								<label className="control-label white">Password</label>
								<input className="form-control form-group" type="password" required />
							</div>
							<div className="col-md-2">
								<button className="btn bg-orange white" type="submit">LOG IN</button>
							</div>
						</form>
					</div>
				</div>
				<div className="row section register">
					<div className="row">
						<div className="col-md-6 col-md-offset-3">
							<h1 className="h1 homepage white">Temukan dan jalin kolaborasi dengan stakeholder sektor publik yang tepat dan terpercaya dari seluruh Indonesia</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-md-offset-3">
							<div className="panel panel-default panel-register">
								<div className="panel-heading bg-brown white heading-register">
									<h1 className="panel-title h1 homepage white">Mari Bergabung!</h1>
								</div>
								<div className="panel-body">
									<form role="form" className="form-group margin-register">
										<div className="col-md-6">
											<label className="control-label brown">Nama Depan</label>
											<input className="form-control form-group" type="text" required />
										</div>
										<div className="col-md-6">
											<label className="control-label brown">Nama Belakang</label>
											<input className="form-control form-group" type="text" required />
										</div>
										<div className="col-md-12">
											<label className="control-label brown">E-mail</label>
											<input className="form-control form-group" type="email" required />
										</div>
										<div className="col-md-12">
											<label className="control-label brown">Password</label>
											<input className="form-control form-group" type="password" required />
										</div>
										<div className="col-md-12">
											<label className="control-label brown">Konfirmasi Password</label>
											<input className="form-control form-group" type="password" required />
										</div>
										<div className="col-md-12">
											<button className="btn bg-orange white col-md-12" type="submit">DAFTAR</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row section why">
					<div className="row">
						<div className="col-md-10 col-md-offset-1">
							<div className="col-md-4">
								<img className="resize-h-200 center-block" src={img_why1}/>
								<h1 className="h1 homepage brown">Kolaborasi dengan <br/>Siapa Saja</h1>
								<div className="why desc brown">Pilih mitra kolaborasi terpercaya sesuai dengan kebutuhan inisiatif <br/> dan program non-profit Anda</div>
							</div>
							<div className="col-md-4">
								<img className="resize-h-200 center-block" src={img_why2}/>
								<h1 className="h1 homepage brown">Kesempatan Pendanaan Tak Terbatas</h1>
								<div className="why desc brown">Temukan mitra pendanaan yang menyediakan hibah triliunan rupiah dari seluruh Indonesia</div>
							</div>
							<div className="col-md-4">
								<img className="resize-h-200 center-block" src={img_why3}/>
								<h1 className="h1 homepage brown">Bangun Sustainability Brand Anda</h1>
								<div className="why desc brown">Dapatkan kepercayaan dari pelaku sektor publik lainnya dengan kapabilitas dan inisiatif yang telah Anda lakukan</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-10 col-md-offset-1">
							<div className="col-md-12 why box bg-orange">
								<h1 className="h1 homepage white">Cari proyek, penawaran, dan organisasi</h1>
								<div className="row">
									<div className="col-md-11">
										<form className="form-horizontal">
												<div className="form-group form-group-lg">
													<div className="col-md-8 col-md-offset-2 input-group big-search">
														<input className="form-control" type="text" placeholder="Ketik pencarian..." />
														<span className="input-group-addon"><i class="fa fa-search"></i></span>
													</div>
												</div>
										</form>
									</div>
									<div className="col-md-2 big-adv">
										<a href="">Lebih lanjut</a>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				<div className="row section who">
					<div className="col-md-8 col-md-offset-2">
						<h1 className="h1 homepage who brown">Belum menemukan peran yang cocok untuk Anda?</h1>
						<div className="row">
							<div className="col-md-3">
								<img className="resize-w-200 center-block" src={img_who1}/>
							</div>
							<div className="col-md-8 who middle">
								<h1 className="h1 homepage who orange">Jadilah Inovator</h1>
								<div className="who desc brown">Anda punya ide perubahan?<br/>Temukan anggota tim dan mentor, dapatkan pendanaan, dan lihat bagaimana ide Anda menjadi nyata!</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-8 who middle">
								<h1 className="h1 homepage who right orange">Kreator untuk Anda yang Konkret</h1>
								<div className="who desc right brown">Temukan proyek dan organisasi yang sesuai dengan minat dan kapasitas Anda. Bantu dan nikmati sensasi meninggalkan jejak kebaikan di dunia!</div>
							</div>
							<div className="col-md-3">
								<img className="resize-w-200 center-block" src={img_who2}/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3">
								<img className="resize-w-200 center-block" src={img_who3}/>
							</div>
							<div className="col-md-8 who middle">
								<h1 className="h1 homepage who orange">Investor, Katalis Perubahan</h1>
								<div className="who desc brown">Temukan proyek dan organisasi yang tepat dan terpercaya untuk didanai. Investasikan uang Anda untuk sosial dan lingkungan!</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row footer bg-brown">
					<div className="col-md-7 col-md-offset-2">
						<a href="#">Bergabung</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
						<a href="#">Tentang Kami</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
						<a href="#">Tim</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
						<a href="#">Karir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
						<a href="#">Syarat dan Ketentuan</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
						<a href="#">Kebijakan Privasi</a>&nbsp;&nbsp;&nbsp;
					</div>
					<div className="col-md-3">
						<a href="#" className="falink"><i className="fa fa-facebook-square"></i></a>
						<a href="#" className="falink"><i className="fa fa-twitter-square"></i></a>
						<a href="#" className="falink"><i className="fa fa-instagram"></i></a>
						<a href="#" className="falink"><i className="fa fa-youtube-square"></i></a>
					</div>
				</div>
			</div>
		)
	}
})