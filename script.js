/**
 * Created by h205p2 on 2/14/17.
 */

function createGrid(side){
    $(document).ready(function(){
        $("table").hide();
    });
    var grid = document.createElement('table');
    document.getElementById('table').appendChild(grid);
    grid.id = 'grid'+side;

    for (var i = 0; i < side; i++){
        var row = document.createElement('tr');
        grid.appendChild(row);
        for (var j = 0; j < side; j++){
            var cell = document.createElement('td');
            row.appendChild(cell);
            cell.id = j + ',' + i;
            row.appendChild(cell);
        }
    }
}

