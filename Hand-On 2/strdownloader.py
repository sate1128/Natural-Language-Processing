from pythonopensubtitles.opensubtitles import OpenSubtitles
import requests, zipfile, io
ost = OpenSubtitles()
token = ost.login("doctest", 'doctest')
data = ost.search_subtitles([{'query' :'cape no.7', 'sublanguageid' : 'zht'}])
zip_file_url = data[0]['ZipDownloadLink']
r = requests.get(zip_file_url)
z = zipfile.ZipFile(io.BytesIO(r.content))
z.extractall("/Users/sate/Desktop")