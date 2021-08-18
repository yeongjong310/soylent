import graphene

from ..unions import AccountUnion, PostUnion
from .post import resolve_post
from .account import resolve_account


class Query(graphene.ObjectType):
    post = graphene.Field(type=PostUnion,
                          token=graphene.NonNull(graphene.String),
                          id=graphene.Int(default_value=None),
                          title=graphene.String(default_value=None),
                          resolver=resolve_post)

    account = graphene.Field(type=AccountUnion,
                             token=graphene.NonNull(graphene.String),
                             id=graphene.String(default_value=None),
                             username=graphene.String(default_value=None),
                             resolver=resolve_account)
