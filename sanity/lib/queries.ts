import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || category match $search || title match $search || author->name match $search ] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}`);

export const STARTUPS_TEST =
  defineQuery(`*[_type == "startup"]{
  _id, 
  title, 
}`);

export const STARTUPS_BY_ID_QUERY =
  defineQuery(`*[_type == "startup" && _id == $id][0] {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio , username
  }, 
  views,
  description,
  category,
  image,
  pitch,
}`);

export const STARTUPS_VIEWS_QUERY =
  defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id , views
  }`);

export const AUTHOR_BY_GITHUB_ID_QUERY =
  defineQuery(`*[_type == "author" && _id == $id][0]{
  _id,
  name,
  username,
  image,
  bio
  }`);

export const STARTUPS_BY_AUTHOR_QUERY =
  defineQuery(`*[_type == "startup" && author._ref == $id] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}`);
