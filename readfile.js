var ForReading = 1, ForWriting = 2, ForAppending = 8;
// The following line contains constants for the OpenTextFile
// format argument, which is not used in the code below.
var TristateUseDefault = -2, TristateTrue = -1, TristateFalse = 0;

var fso = new ActiveXObject("Scripting.FileSystemObject");

// Open the file for output.
var filename = "c:\\windows\\system32\\drivers\\etc\hosts";

var f = fso.OpenTextFile(filename, ForWriting, true);

// Write to the file.
f.WriteLine("Hello world!");
f.WriteLine("The quick brown fox");
f.Close();

// Open the file for input.
f = fso.OpenTextFile(filename, ForReading);

// Read from the file and display the results.
while (!f.AtEndOfStream)
    {
    var r = f.ReadLine();
    document.write (r + "<br />");
    }
f.Close();
