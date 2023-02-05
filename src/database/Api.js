import { faker } from '@faker-js/faker'
import _ from 'lodash'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import axios from 'axios'

/* urls */
const host =
  //'http://localhost:8080'
  'https://auctions-app.up.railway.app'
// auth
const loginUrl = `${host}/users/login`
const logoutUrl = `${host}/users/logout`
// auctions
const bidUrl = (id,bidid,amount) =>`${auctionsUrl}/bid/${id}&${bidid}&${amount}`
const getAuctionListDescUrl = `${host}/auctions/recentAuction`
const advancedSearchUrl = `${host}/auctions/search`
const auctionStateUrl = `${host}/auctionState`
const auctionsUrl = `${host}/auctions`
const auctionUrl = (id) => `${auctionsUrl}/${id}`
const countUrl = (id) => `${auctionsUrl}/count/${id}`
const auctionMisedUrl = (id) => `${auctionsUrl}/mised/${id}`
// categories
const categoriesUrl = `${host}/categories`
const categoryUrl = (id) => `${categoriesUrl}/${id}`
// reloads
const reloadsUrl = `${host}/reloads`
const reloadValidationUrl = `${reloadsUrl}/validations`
// settings
const settingsUrl = `${host}/settings`
const settingUrl = (id) => `${settingsUrl}/${id}`
// statistics
const turnoverUrl = `${host}/statistics/turnover`
const auctionsStatsUrl = `${host}/statistics/auctions`
//AppUser
const appUsersUrl = `${host}/users/appUsers`

/* api calls */
// Generic
export const getCall = (url, auth = false) => {
  let config = {}
  if (auth) {
    config = { headers: { Authorization: `Bearer ${localStorage.getItem('appUser-token')}` } }
  }
  return axios
    .get(url, config)
    .then((res) => (res.status === 200 ? res : Promise.reject(res)))
    .then((res) => res.data.data)
}

export const postCall = (url, data, auth = false) => {
  let config = {}
  if (auth) {
    config = { headers: { Authorization: 'Bearer ' + localStorage.getItem('appUser-token') } }
  }
  console.log(config)
  return axios
    .post(url, data, config)
    .then((res) => (res.status === 200 ? res : Promise.reject(res)))
    .then((res) => res.data.data)
}

export const putCall = (url, data, auth = false) => {
  let config = {}
  if (auth) {
    config = { headers: { Authorization: 'Bearer ' + localStorage.getItem('appUser-token') } }
  }
  return axios
    .put(url, data, config)
    .then((res) => (res.status === 200 ? res : Promise.reject(res)))
    .then((res) => res.data.data)
}

// Authentication
export const login = (user) => {
  return postCall(loginUrl, user)
}
export const logout = () => {
  return getCall(logoutUrl, true)
}

// Auctions
export function getAuctionListDesc(){
  return getCall(getAuctionListDescUrl, true)
}
export const advancedSearch = (data) =>{
  return postCall(advancedSearchUrl,data, true)
}
export function getAuctionState() {
  return getCall(auctionStateUrl, true)
}
export function getAuctions() {
  return getCall(auctionsUrl, true)
}
export function getAuction(id) {
  return getCall(auctionUrl(id), true)
}
export function updateAuction(id, data) {
  return putCall(auctionUrl(id), data, true)
}
export function count(id) {
  return getCall(countUrl(id),true)
}
export function getAuctionMised(id) {
  return getCall(auctionMisedUrl(id),true)
}

export function encherir(id,bidid,amount) {
  return getCall(bidUrl(id,bidid,amount),true)
}
// Categories
export function getCategories() {
  return getCall(categoriesUrl,true)
}
export function getCategory(id) {
  return getCall(categoryUrl(id), true)
}

export function updateCategory(id, data) {
  return putCall(categoryUrl(id), data, true)
}

export function addCategory(category) {
  return postCall(categoriesUrl, category, true)
}

// Reloads
export function getReloads() {
  return getCall(reloadsUrl, true)
}
export function validateReloads(reload) {
  return postCall(reloadValidationUrl, reload, true)
}

// Settings
export function getSettings() {
  return getCall(settingsUrl, true)
}
export function getSetting(id) {
  return getCall(settingUrl(id), true)
}

export function updateSetting(id, data) {
  return putCall(settingUrl(id), data, true)
}

export function addSetting(category) {
  return postCall(settingsUrl, category, true)
}

export function getTurnoverStats() {
  return getCall(turnoverUrl, true)
}

export function getAuctionsStats() {
  return getCall(auctionsStatsUrl, true)
}

//AppUser
export function getAppUser() {
  return getCall(appUsersUrl,true)
}
