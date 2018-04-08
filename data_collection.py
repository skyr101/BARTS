import json
import requests

routes = [11864375, 11864902, 11864414, 11864511, 12088156, 11864554, 11864614, 11864723, 12027719, 11864777, 11865088, 11865133, 11865155, 11865200, 11865239, 11865304, 11865340, 11865388, 11865441, 11865499, 11866681, 11867809, 11867838, 11867858, 11867880, 11867897, 11868185, 11868126]

data = {'routes' : []}

for route in routes: 
	url = "https://www.strava.com/api/v3/routes/"+str(route)+"?access_token=fc18de2e40842d7088e7e670ee011a6c438c8272"
	response = requests.get(url)
	response = json.loads(response.text)
	route = {'user': response['athlete']['firstname'],'name': response['name'], 'distance': response['distance'], 'elevation_gain': response['elevation_gain'], 'polyline': response['map']['summary_polyline']}
	data['routes'].append(route)

json_data = json.dumps(data)
with open('dataset.json', 'w') as outfile:
	json.dump(data, outfile)