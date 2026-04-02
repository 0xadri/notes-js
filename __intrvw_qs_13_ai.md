
-------------------------------------------------------

# When modifying an existing claude skill, is it possible to comment out part of it instead of totally removing that part ?

No.

There's no true comment syntax that hides content from Claude — since Claude reads the raw file, anything in the file is visible to it, including HTML comments (<!-- -->).

# Is there a work around?
                                                                                                                                                                                                  
HTML comments (<!-- disabled section -->) are a common convention and do hide content from rendered Markdown, but Claude still reads them. They'd likely be interpreted as "this is disabled" if you write them clearly.

A cleaner approach is to move the section you want to disable into a separate file (e.g., _disabled.md) and not reference it from the main skill.

-------------------------------------------------------

# 

-------------------------------------------------------

# 


-------------------------------------------------------

# 


