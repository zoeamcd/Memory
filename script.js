/**
 * Created by h205p2 on 2/14/17.
 */
function createGrid(side){
    document.createElement('table');
    for (var i = 0; i < side; i++){
        var row = document.createElement('tr');
        document.getElementById('grid').appendChild(row);
        for (var j = 0; j < side; j++){
            var cell = document.createElement('td');
            row.appendChild(cell);
            cell.id = j + ',' + i;
            row.appendChild(cell);
        }
    }
    document.getElementById("0,0").innerHTML = "0,0"
    $(document).ready(function(){
        $("button").hide();
    });
}
