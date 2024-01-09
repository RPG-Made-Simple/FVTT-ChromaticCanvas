# FoundryVTT Module Template
I've created this template for personal use, but you can use it too! Just make sure to change what needs to be changed, such as:
```
- ./LICENSE
- ./module.json
- ./.github/FUNDING.yml
```
The files listed above contain information that is related to me (ZotyDev) and thus you should change the info contained there.

## Automatic Release Creation
If you create your `CHANGELOG.md` file like this you can benefit from automatic releases:
```
# MODULE Changelog
## Version x.x.x.*

...

## Version x.x.x.*

...
```
Note that the first release will not be automatic because the action I use looks for starting and ending lines, both of which should contain `##`, but you can just insert a dummy `##` at the end of the file, or create the release yourself.

To create a release you simply puh a new tag with the release version ("1.0.0", "1.2.3", "1.3.2.1", etc..)

_The release notes will contain the first header defined at `README.md` by default, take a look at the actions documentation if you want to change it_
