from pycorenlp import StanfordCoreNLP
import json
from hanziconv import HanziConv

nlp = StanfordCoreNLP('http://localhost:9000')
f = open('movie_title.txt', 'r', encoding='utf-8')
content = f.read()
f.close()
content = content.split('\n')
s = []
for i in content:
    s.append(HanziConv.toSimplified(i))


whole_data = []  
for i,sentence in enumerate(s):
    single_data = {}
    single_data['column'] = []
    single_data['tokens'] = []
    single_data['parse'] = []
    single_data['basicDependencies'] = []
    single_data['column'] = s[i]
    text = s[i]
    output = nlp.annotate(text, properties={
        'annotators': 'tokenize,ssplit,pos,depparse,parse',
        'outputFormat': 'json'
    })
    for each in output['sentences']:
        single_data['parse'].append(each['parse'])
        single_data['tokens'].append(each['tokens'])
        single_data['basicDependencies'].append(each['basicDependencies'])
    #print(single_data)
    whole_data.append(single_data)

with open('movie_title_result1.txt', 'w') as outfile:
    json.dump(whole_data, outfile)