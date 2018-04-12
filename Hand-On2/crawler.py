
# coding: utf-8

# In[1]:


from pythonopensubtitles.opensubtitles import OpenSubtitles
import requests, zipfile, io
f = open('movie.txt', 'r')
movie = f.read()
f.close()
movie = movie.split('\n')


# In[2]:


m = []
for i in movie:
    temp = []
    temp = i.split('\t')
    m.append(temp)
m = m[1:-1]
m


# In[3]:


h = []
for i in m:
    ost = OpenSubtitles()
    token = ost.login("doctest", 'doctest')
    data = ost.search_subtitles([{'query' : i[0], 'sublanguageid' : 'zht', }])
    highest = 0
    highest_movie = 0
    for index,value in enumerate(data):
        #print(value['SubDownloadsCnt'])
        if int(value['SubDownloadsCnt']) > highest:
            highest = int(value['SubDownloadsCnt'])
            highest_movie = index
    print(highest_movie)
    h.append(highest_movie)
#calculate the downloads count


# In[5]:


h[88]=0# index2 indicate a wrong movie


# In[6]:


path = []
for i in range(89):
    ost = OpenSubtitles()
    token = ost.login("doctest", 'doctest')
    data = ost.search_subtitles([{'query' : m[i][0], 'sublanguageid' : 'zht', }])
    zip_file_url = data[h[i]]['ZipDownloadLink']
    path.append(zip_file_url)
    print(zip_file_url)
    #r = requests.get(zip_file_url)
    #z = zipfile.ZipFile(io.BytesIO(r.content))
    #z.extractall("/Users/sate/Desktop/Handon/movie")


# In[9]:


f = open('count.txt', 'r')
count = f.read()
f.close()
count = count.split('\n')
len(count)
#because of different encoding and format in subtitles
#I count the nums of subtitles manually


# In[12]:


output = ''
for i in range(89):
    output += m[i][0]
    output += '\t'
    output += path[i]
    output += '\t'
    output += count[i]
    output += '\n'
output


# In[13]:


f = open('0656109_黃慎航_task1.txt', 'w')
f.write(output)
f.close()

