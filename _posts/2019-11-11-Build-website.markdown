---
categories: [websites, jekyll, קדימון]
tags: [Jekyll, websites]
title: בניית אתר jekyll/github pages
author: Shaked Ashkenazi
date: 11/10/2019
direction: rtl
align: right
---
כמו שאפשר לנחש, האתר הזה נבנה בעזרת פלטפורמת Jekyll ומאוחסן כGithub page.  
אפשר לראות את הקוד לאתר [כאן](https://github.com/shaqash/shaqash.github.io).  

### מה זה Jekyll או Github Page?
אז Jekyll היא פלטפורמה לבניית אתרים סטטים באופן דינאמי וקל יחסית. בJekyll אפשר להשתמש בThemes מוכנים לאתר שלכם או לבנות את הlayouts בעצמכם. Jekyll מאפשר שימוש בפלאגינים, שימוש במשתנים וקוד בתוך הHTML וכתיבה בפורמט MARKDOWN שהופך לבסוף לדף HTML באופן אוטומטי.
גם הדף הזה נכתב בMarkdown.  
גיטהאב מאפשרים אחסון וdeployment אוטומטי של אתרים סטטים ומתממשקים בקלות עם Jekyll. האחסון מתבצע בGithub page, בתוך repository רגיל לחלוטין בGithub ובחינם.

###  למה?
אולי רציתם להציג את הפרויקט שלכם באופן יותר מורחב מReadme? אולי רציתם לבנות אתר שמציג את עצמכם?

### איך?
דרישת קדם היא Gem.  
נכתוב בטרמינל:  
```bash
gem install bundler jekyll
jekyll new my-awesome-site
cd my-awesome-site
bundle exec jekyll serve
```
והאתר אמור לרוץ לכם בכתובת [localhost:4000](http://localhost:4000).  
  
בהמשך נלמד איך לבנות layout משלכם, להכניס CSS, להעלות לגיטהאב ועוד.
