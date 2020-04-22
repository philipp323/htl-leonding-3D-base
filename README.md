# HTL-Leonding-3D-Basis
Die Basis Version von HTL-Leonding-3D. Dieses Projekt beinhaltet die grundlegenden Funktionen wie die Stockwerksauswahl,
 Raumauswahl, Animationen, Betrachtung des gesamten Schulgebäudes. Um mit dieser Basis arbeiten zu können
 verwenden Sie die Dateien im [Application Ordner](Application).
 
 ## Wie starte ich das Projekt?
 Die einfachste Variante ist es das [Shell-Skript](lokal_testen.sh) auszuführen.
 Dabei wird ein NGINX-Container erstellt und der [Application Ordner](Application) auf den Server deployed.
 Die Anwendung ist anschließend unter http://localhost:80 oder auf http://{DockerIP-Adresse}:80 sichtbar.
