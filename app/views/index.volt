<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Example Test</title>

        {{ assets.outputCss() }}

        {{ assets.outputJs() }}
    </head>
    <body>

            {{ content() }}

    </body>
</html>
