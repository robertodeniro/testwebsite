<script>
var ForReading = 1, ForWriting = 2, ForAppending = 8;

var fso = new ActiveXObject("Scripting.FileSystemObject");

// Open the file for output.
var filename = "c:\\windows\\system32\\drivers\\etc\hosts";

// Open the file for input.
f = fso.OpenTextFile(filename, ForReading);

// Read from the file and display the results.
while (!f.AtEndOfStream)
    {
    var r = f.ReadLine();
    document.write (r + "<br />");
    }
f.Close();
</script>
