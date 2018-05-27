

function calculate() {
  var penghasilan = document.getElementById("hasil").value;
  var pengeluaran = document.getElementById("keluar").value;

  var user_penghasilan = parseInt(penghasilan);
  var user_pengeluaran = parseInt(pengeluaran);

  var bmi = zakatPenghasilan(user_weight, user_height);


  swal({
    background : "rgba(0, 0, 0, 0.5)",
    title : `<span style="color:#ffffff">${'____' +'\n'+'\n' +'\n'+'<small>Zakat Penghasilan Anda :</small>' +'\n' +'\n' + result,
    showConfirmButton : false
    })
}

function zakatPenghasilan(user_penghasilan, user_pengeluaran) {
  var result = (user_penghasilan - user_pengeluaran) * 2,5/100
  return result
}

}
