var data = [
  {
    "sno": "1",
    "Sid": "4567",
    "Sname": "sandhya",
    "gender": "f",
    "age": "22",
    "salary": "200000",
    "Sstatus": "Active"
  },
  {
    "sno": "2",
    "Sid": "4566",
    "Sname": "ajay",
    "gender": "m",
    "age": "24",
    "salary": "100000",
    "Sstatus": "InActive"
  },
  {
    "sno": "3",
    "Sid": "4569",
    "Sname": "bhanu",
    "gender": "f",
    "age": "26",
    "salary": "400000",
    "Sstatus": "Active"
  },
  {
    "sno": "1",
    "Sid": "4568",
    "Sname": "chandra",
    "gender": "m",
    "age": "25",
    "salary": "250000",
    "Sstatus": "InActive"
  },
  {
    "sno": "11",
    "Sid": "4562",
    "Sname": "dev",
    "gender": "f",
    "age": "20",
    "salary": "500000",
    "Sstatus": "Active"
  }
];
/*
function to generate a generic table using jquery
*/
function create()
{
  var table = $('<table id = "table"></table>');
  var colnames = Object.keys(data[0]);
  var thead = $('<thead></thead>');
  for(i = 0 ; i < colnames.length ; i++ )
  {
    var th = $('<th id = "th">' + colnames[i] + '<p onclick="sortingI(' + i + ')" class = "p">' + "&#x025B4" + '</p>' + '<p onclick = "sortingD(' + i + ')" class = "p">' + "&#x025BE" + '</th>');
    thead.append(th);
  }
  table.append(thead);
  var tbody = $('<tbody></tbody>');
  var l = colnames.length;
  for( var r = 0 ; r < data.length ; r++ )
  {
    var tr = $('<tr></tr>');
    for ( var c = 0 ; c < l ; c++ )
    {
      var td = $('<td>' + data[r][colnames[c]] + '</td>');
      tr.append(td);
    }
    tbody.append(tr);
  }
  table.append(tbody);
  var body = $("#division");
  body.append(table);
}
function sortingI(colid)
{
  for(var i=0; i<data.length;i++)
  {
    var columns = Object.keys(data[i]);
    for(var j=0;j<data.length-1;j++)
    {
      var e1 = data[j][columns[colid]];
      var e2 = data[j+1][columns[colid]];
      if(e1 < e2)
      {
       var t = data[j];
        data[j] = data[j+1];
        data[j+1] = t;
      }
    }
  }
    table(data);
}

function sortingD(colid)
{
  var columns = Object.keys(data[0]);
  for(var i=0; i<data.length;i++)
  {
  for(var j=0;j<data.length-1;j++)
  {
    var e1 = data[j][columns[colid]];
    var e2 = data[j+1][columns[colid]];
      if(e1>e2)
      {
       var t = data[j];
        data[j] = data[j+1];
        data[j+1] = t;

      }
    }
    }
    table(data);
}
function table(d)
{
  var i,j;
  for(i=0;i<d.length;i++)
  {
    var columns=Object.keys(d[i]);
    for(j=0;j<columns.length;j++)
    {
      $("#table tr:eq('+i+') td:eq('+j+')").html(d[i][columns[j]]);
    }
  }
}
