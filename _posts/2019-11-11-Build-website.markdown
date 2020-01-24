---
categories: [websites]
tags: [Jekyll, websites]
title: בניית האתר
author: Shaked Ashkenazi
date: 11/10/2019
direction: rtl
align: right
---
האתר הזה בנוי בJekyll ומאוחסן כGithub page.
אפשר לראות את הקוד לאתר [כאן](https://github.com/shaqash/shaqash.github.io).
במדריך זה אנסה להסביר איך בניתי את האתר הזה, בתקווה ותבינו איך לבנות אתר משלכם.

### אז מה זה Jekyll או Github Page?
אז Jekyll היא מערכת ליצירת אתרים סטטיים. Github מתממשקים עם Jekyll ומאפשרים אחסון והעלאה לאוויר של אתרים **ובחינם!**

###  שימושים
הצגה של פרויקט, ארגון או בן אדם פרטי כמוני וכמוך.

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
  
`כמובן שזה לא כזה פשוט.` אוקיי, אולי כן אם אתם משתמשים בערכת נושא ברירת המחדל. בקובץ הבא תמצאו את ההגדרות הבסיסיות של האתר:

```yml
# _config.yml
title: Shaked Ashkenazi
description: |
  My description  
baseurl: ""
author: "Shaked Ashkenazi"
sub_title: "Software Developer"
img_url: ""

# Build settings
# theme: minima ערכת נושא אם יש
plugins: # רשימת התוספים
  - jekyll-feed # יוצר פיד RSS

# כמובן שאתם יכולים להמציא משתנים משל עצמכם,
# בהמשך תראו איך השתמשתי במשתנים הבאים:
social_links:
  github: shaqash
  linkedin: shaked-ashkenazi-...
  rss: feed.xml
```

### שימוש במשתנים

להלן קובץ side.html שכתבתי שמייצג את הsidebar:
```html
# _includes/side.html
<div class="">
  <img class="ui middle aligned small circular image" src="{\\{ site.img_url }}" height="128px">
  <h2 class="ui header">{{ site.author | default: "AUTHOR" }}
    <div class="sub header">{\\{ site.sub_title | default: "Developer"}}</div>
  </h2>
  <div class="ui compact icon menu social">
    <a class="item" href="https://github.com/{\\{ site.social_links.github }}">
      <i class="github black icon"></i>
    </a>
    <a class="item" href="https://www.linkedin.com/in/{\\{ site.social_links.linkedin }}">
      <i class="alternate linkedin blue icon"></i>
    </a>
    <a class="item" href="{\\{ site.social_links.rss }}">
      <i class="rss orange icon"></i>
    </a>
  </div>
</div>
```
* נשים לב שקוד (לא HTML) מיוצג ע"י סוגריים מסולסלים כפולים. (יש להתעלם מ\\\ שהוספתי על מנת שלא יציג את הערך של המשתנה)
* נשים לב ש`site` הוא אובייקט שמצייג את המשתנים שרשמנו ב _config
* נשים לב לשימוש במשתנים הנוספים שהגדרנו ב_config
* נשים לב למילה `default` שנותנת לנו גיבוי למקרה שsub_title לא קיים

### _posts

![]({{ '/assets/images/posts.png' | relative_url }})

אחד החוזקות של Jekyll בכתיבת פוסטים והפיכת markdown לhtml.

* נשים לב לשם הפוסט:
year-month-day-Name-with-spaces.markdown
* נשים לב להגדרות בראש הדף:

```yml
---
categories: [websites]
tags: [Jekyll, websites]
title: בניית אתר jekyll/github pages
author: Shaked Ashkenazi
date: 11/10/2019
direction: rtl
align: right
---
```

* נשים לב לURL - 
http://localhost:4000/websites/2019/10/11/Build-website.html

* נשים לב שהמתשנים בראש הדף מוקפים ב - - - (ללא רווחים)

כמובן שגם פה אפשר להמציא אילו משתנים שאתם רוצים. אני הגדרתי את align וdirection שיעזרו לי להציג את העמוד בהתאם.  
בהמשך נראה איך אפשר להשתמש בtags או בcategories בלולאה כדי להציג אותם בעמוד.
