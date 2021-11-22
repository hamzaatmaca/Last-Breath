<div class="container align-items-center ">
	<div class="row text-center align-items-center mainRow">
		<div style="margin-top: 50px!important;" class="col-md-6 d-flex  justify-content-center">
			<img src="assets/img/clock.gif" class="img-fluid" alt="clock">
		</div>
		<div class="col-md-5 mt-4 offset-md-1">
			<span id="welcomeTitle">
				Neden Bu Dünya'da Yaşıyorsun ?<br> Sebebini öğrenmek ister misin?
			</span>
			<form action="result" method="POST" class="enterInfo">
				<input id="send" type="submit" value="Gönder.. Ve Niye Yaşadığını Bul..">

				<label for="name"> İsim </label>
				<input id="name" placeholder="Adını Buraya Yazabilirsin" type="text" name="name" required>

				<!--<label for="smoke"> Günde Kaç Adet Sigara İçiyorsun ? </label>
				<input type="number" id="smoke" name="smoke" min="0" max="200" required>

				<label for="spor"> Spor Yapıyor musun? </label>
				<input id="spor" placeholder="Evet - Hayır "  name="spor">

				<label for="city"> Yaşadığın Şehrin Nüfusu Ne Kadar? </label>
				<input type="number" id="city" min="0" max="1000000000"  name="city" required>-->

				<label for="date"> Ne Zaman Doğdun ? </label>
				<input id="date" type="date" value="1900-01-01" name="date" required>

				
			</form>
		</div>

	</div>
</div>
</div>
