<?php 
if($_POST["date"] == null ||  $_POST["name"] == null ){
	header("location:http://localhost/time/");
}
else{
	?>

	<input type="hidden" id="getDate" value="<?php echo $_POST["date"]; ?>">
	<div class="container align-items-center">
		<div class="row text-center align-items-center mainRow">
			<div class="col-md-4 mt-2">
				<fieldset class="analyz">
					<legend style="font-size: 25px; letter-spacing: 6px;">Geçmiş Analiz<br><span class="notice">(Doğum Tarihiniz Baz Alınmıştır)</span></legend>
					<label style="font-size: 15px;  font-weight: bold; letter-spacing: 6px;color:yellow; text-shadow: 0 0 2px white;" for="totalYear">Geçen Toplam Zaman (Yıl-Ay-Gün)</label>
					<input id="totalYear" type="text"  value="" readonly>
					<label style="font-size: 15px;  font-weight: bold; letter-spacing: 6px;color:yellow; text-shadow: 0 0 2px white;" for="totlalHour">Geçen Toplam Zaman (Saat-Dakika-Saniye)</label>
					<input id="totalHour" type="text"  value="" readonly>
					<label style="font-size: 15px;  font-weight: bold; letter-spacing: 6px;color:yellow; text-shadow: 0 0 2px white;" for="breath">Alınan Nefes Sayısı</label>
					<input id="breath" type="text"  value="" readonly=>
					<label style="font-size: 15px;  font-weight: bold; letter-spacing: 6px;color:yellow; text-shadow: 0 0 2px white;" for="hearth">Kalp Ritim Sayısı</label>
					<input id="hearth" type="text"  value="" readonly=>
				</fieldset>

			</div>
			<div class="col-md-4 mt-2">
				<fieldset class="analyz">
					<legend style="font-size: 25px; letter-spacing: 6px;">Ölüme Kalan Süre<br><span class="notice">(DSÖ 2020  Türkiye Raporu Baz Alınmıştır)</span></legend>
					<label style="font-size: 15px;  font-weight: bold; letter-spacing: 6px;color:yellow; text-shadow: 0 0 2px white;"for="kyear">Kalan Toplam Zaman (Yıl-Ay-Gün)</label>
					<input id="kyear" type="text"  value="" readonly>
					<label style="font-size: 15px;  font-weight: bold; letter-spacing: 6px;color:yellow; text-shadow: 0 0 2px white;" for="khour">Kalan Toplam Zaman (Saat-Dakika-Saniye)</label>
					<input id="khour" type="text"  value="" readonly>
					<label style="font-size: 15px;  font-weight: bold; letter-spacing: 6px;color:yellow; text-shadow: 0 0 2px white;" for="kbreath">Kalan Nefes Sayısı</label>
					<input id="kbreath" type="text"  value="" readonly=>
					<label style="font-size: 14px;  font-weight: bold; letter-spacing: 6px;color:yellow; text-shadow: 0 0 2px white;" for="kheart">Kalan Kalp Ritim Sayısı</label>
					<input id="khearth" type="text"  value="" readonly=>
				</fieldset>
			</div>
			<div class="col-md-4 mt-2">
				<div style="text-align: left;">
					<fieldset style="margin-top: 20px;">
						<legend style="font-size: 18px;  font-weight: bold; letter-spacing: 6px;color:yellow; text-shadow: 0 0 2px white;">Yaşayacağın Muhtemel Toplam Süre (DSÖ)</legend>
						<span style="letter-spacing: 4px;">71 yıl 11 ay 30 gün 23 saat 59 dakika 1sn</span>
					</fieldset>
					<fieldset style="margin-top: 20px;">
						<legend style="font-size: 18px;  font-weight: bold; letter-spacing: 6px;color:yellow; text-shadow: 0 0 2px white;">Evren'e Oranla Yaşadığın Süre</legend>
						<span id="spaceAge" style="letter-spacing: 2px;"></span>
					</fieldset>
					<fieldset style="margin-top: 20px;">
						<legend style="font-size: 20px;  font-weight: bold; letter-spacing: 6px; color:yellow; text-shadow: 0 0 2px white;">
							<button style="width: 100%; color:black;font-weight: 900;" id="modal" value="<?php echo strtoupper($_POST["name"]) ;error_reporting(0) ?>" class="btn btn-warning">Sana Bir Mesaj Var <?php echo strtoupper($_POST["name"]) ;error_reporting(0) ?> 
							</button>
						</legend>

				</fieldset>

			</div>
		</div>
	</div>
</div>
<?php 
}
?>