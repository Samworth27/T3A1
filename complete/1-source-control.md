### Trunk Based Development

Trunk based development is a source control workflow often used with larger projects. (especially for those that require CI/CD (Continuous Integration/ Continuous Development)
The premise behind TBD (Trunk Based Development) is that having multiple long running feature branches used in a branching workflow means a high probability of conflicts when merging branches back into the main branch. TBD seeks to counter this by instead having developers committing straight into the main trunk, or for especially large projects: committing into a short lived (1/2 days max) feature branch that is merged back into the trunk.
The short time frame between the commits means that conflicts are less likely and less painful to deal with if they occur.

TBD is most appropriate with a group of mainly experienced developers as there is less room for oversight when compared to a workflow like Gitflow for example.
However with a trusted group of experienced developers, by reducing the administrative overhead and allowing the developers to feel trusted can result in higher quantities of higher quality code.