# [自然語言處理] 實作二

**In-class Submission Deadline: 15:10, November 23 Thursday, 2017**
**Late Submission Deadline: 23:59, November 29 Thursday, 2017**

* Submission made after in-class submission deadline will be considered late submission.
* During late submission period, we'll only review you work **once a day** (usually at around **11pm**) and only the latest submissions will be reviewed.
* Check your demo progress [here](https://docs.google.com/spreadsheets/d/1sgB7yut9GgZLb8P4taBriHRiy_bH85mg8Sbger5UiUQ/edit?usp=sharing)
* If you have any question, please post you question [here](https://hackmd.io/IYRgxgzAbArAZiAtDAnGKiAscAmxEAcA7DDosAnFBHETgEw4CmQA?both)

## Task 1

**The in-class submission deadline for test 1 is postponed to 23:59, November 29**


In this task, you need to use your crawler to download **Traditional Chinese** movie subtitle files for all movies on [this list](https://drive.google.com/file/d/1LXxiBsTg0ul_lco5Bldqco_Bb2O5CcFm/view?usp=sharing) from opensubtitles.org, unzip the files and count the number of movie lines of each movie.

You output should look like:
```=
From Russia with Love    goo.gl/abcde    300
Goldfinger    goo.gl/abcde    300
You Only Live Twice    goo.gl/abcde    300
```
where the first column is **the movie name**, the second column is **the download link to the movie subtitle file** and the last column is **the number of movie lines of that movie**. Each column is seperated by a **tab(\t)**


* If there're multiple subtitle files available for a movie, you need to download the one with **the highest download count**.

* You need to pack you code for the crawler and the output together into a zip file before submitting. Remember to name you file as **StudentID_Name_task1.zip**, we won't review your work if you don't follow the naming regulation.

* Submit you work for task 1 [here](https://goo.gl/forms/Tn9nze9SOMiIciYl1)

## Task 2

In this task, you need to pasre the [Chinese Subtitle](https://drive.google.com/file/d/1pkRwUC2ihe0RXtnrzHt4VqYlYmsRub4N/view?usp=sharing), and calculate the Pointwise Mutual Information(PMI) for the collocation of (喜歡; POS_1) and (妳; POS_2), (打; POS_1) and (手槍;POS_2),(追;POS_1) and (她;POS_2). You should decide the POS tagging of each word on your own. 

PMI could be calculated by:
$$
pmi(x;y)=log_2 {p(x,y) \over p(x)p(y)}
$$

$$
p(x)={c(x) \over N}
$$

c(x) is the number of movie lines where x occurs and N is the total number of movie lines

You output should look like:
```=
word_1    POS_1    p(word_1)
word_2    POS_2    p(word_2)
PMI

word_1    POS_1    p(word_1)
word_2    POS_2    p(word_2)
PMI

```
where each column is seperated by a **tab(\t)**

* Remember to name you file as **StudentID_Name_task2.txt**. We won’t review your work if you don’t follow the naming regulation.

* Submit you work for task 2 [here](https://goo.gl/forms/9AlKwQFPwsjcJSFK2)



## Task 3

In this task, you need crawl all the movie titles on the **High-grossing films by year list**(**年度最高票房紀錄列表**) [here](https://www.wikiwand.com/zh/%E5%85%A8%E7%90%83%E6%9C%80%E9%AB%98%E9%9B%BB%E5%BD%B1%E7%A5%A8%E6%88%BF) and parse them all. Then, you need to find the **top-three** common POS patterns and briefly describe what you discover.

You output should look like:
```=
(NN, NN)    2    柴柴    臘腸狗    
(VB, NN)    3    回家    返校    吃飯

Your description here......
```
where the first column is **the POS pattern**, the second column is **the number of movie titles that have such pattern** and the rest of the columns are **the movie titles**. Each column is seperated by a **tab(\t)**

* Notice that the POS pattern should correspond to **the complete pos tagging sequence of a movie tile**. i.e., POS pattern **(NN NN)** doesn't match a movie with POS tagging sequence **(NN NN NN NN)**.

* For practical usages, POS taggings should be simplified before furtherly processing them. For instance, POS taggings like NN, NR, NT need to be simplified as N. For all POS taggings of Stanford Chinese Parser, see [here](https://www.sketchengine.co.uk/chinese-penn-treebank-part-of-speech-tagset/)

* Remember to name you file as **StudentID_Name_task3.txt**. We won’t review your work if you don’t follow the naming regulation.

* Submit you work for task 3 [here](https://goo.gl/forms/frFM9d14CwNUks452)
