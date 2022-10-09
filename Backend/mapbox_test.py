import geocoder
from mapbox import Directions


def get_fastest_route(start1, start2, end1, end2):
    pkey = 'pk.eyJ1IjoibndhbHR6IiwiYSI6ImNsOTAxNWM4ZjB1eWIzbnA4NHltNGJuYTEifQ.O-07ozUF6r4841jWpdXN9w'
    skey = 'sk.eyJ1IjoibndhbHR6IiwiYSI6ImNsOTAyZDZrbzB1b2Mzbms0ZnUyZ3djb24ifQ.Qrf-pTg9A6ETmFVJYum7BA'

    # start1 = "178 E Frambes, Columbus, OH"
    # start2 = "89 E Woodruff, Columbus, OH"

    # end1 = "90 W Maynard, Columbus, OH"
    # end2 = "38 W Oakland, Columbus, OH"

    s1 = geocoder.mapbox(start1, key=pkey).json
    s2 = geocoder.mapbox(start2, key=pkey).json
    e1 = geocoder.mapbox(end1, key=pkey).json
    e2 = geocoder.mapbox(end2, key=pkey).json

    service = Directions(skey)

    locs1 = {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [s1['lng'], s1['lat']]}}
            
    locs2 = {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [s2['lng'], s2['lat']]}}
            
    loce1 = {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [e1['lng'], e1['lat']]}}
            
    loce2 = {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [e2['lng'], e2['lat']]}}

    p = [service.directions([locs1, loce1],'mapbox.walking').geojson()['features'][0]['properties']['duration'], service.directions([locs2, loce2],'mapbox.walking').geojson()['features'][0]['properties']['duration']]

    response = [service.directions([locs1, locs2, loce1, loce2],'mapbox.walking').geojson()['features'][0]['properties']['duration'], # 4 options for walking
                service.directions([locs1, locs2, loce2, loce1],'mapbox.walking').geojson()['features'][0]['properties']['duration'],
                service.directions([locs2, locs1, loce1, loce2],'mapbox.walking').geojson()['features'][0]['properties']['duration'],
                service.directions([locs2, locs1, loce2, loce1],'mapbox.walking').geojson()['features'][0]['properties']['duration']]

    fastest = p[0]+p[1]
    fast_i = 0
    for i in range(4):
        if response[i] < fastest:
            fastest = response[i]
            fast_i = i

    if fast_i == 0:
        router = [service.directions([locs1, locs2, loce1],'mapbox.walking').geojson()['features'][0]['properties']['duration'], service.directions([locs2, loce1, loce2],'mapbox.walking').geojson()['features'][0]['properties']['duration']]
        order = [1,2,3,4]
    elif fast_i == 1:
        router = [service.directions([locs1, locs2, loce2, loce1],'mapbox.walking').geojson()['features'][0]['properties']['duration'], service.directions([locs2, loce2],'mapbox.walking').geojson()['features'][0]['properties']['duration']]
        order = [1,2,4,3]
    elif fast_i == 2:
        router = [service.directions([locs1, loce1],'mapbox.walking').geojson()['features'][0]['properties']['duration'], service.directions([locs2, locs1, loce1, loce2],'mapbox.walking').geojson()['features'][0]['properties']['duration']]
        order = [2,1,3,4]
    elif fast_i == 3:
        router = [service.directions([locs1, loce2, loce1],'mapbox.walking').geojson()['features'][0]['properties']['duration'], service.directions([locs2, locs1, loce2],'mapbox.walking').geojson()['features'][0]['properties']['duration']]
        order = [2,1,4,3]
    #print(router)
    #print(fast_i)
    #print(int(response[fast_i]/60), 'minutes and', int(response[fast_i]%60), 'seconds')
    #print(int(router[0]/60), 'minutes and', int(router[0]%60), 'seconds')
    #print(int(router[1]/60), 'minutes and', int(router[1]%60), 'seconds')

    pcov = [int(router[0]/response[fast_i]*1000)/10, '%', int(router[1]/response[fast_i]*1000)/10, '%']

    info = {
        'order': order,
        'router': router,
        'fastest': fastest,
        'pcov': pcov
    }

    return info


def get_distance(start, end):
    pkey = 'pk.eyJ1IjoibndhbHR6IiwiYSI6ImNsOTAxNWM4ZjB1eWIzbnA4NHltNGJuYTEifQ.O-07ozUF6r4841jWpdXN9w'
    skey = 'sk.eyJ1IjoibndhbHR6IiwiYSI6ImNsOTAyZDZrbzB1b2Mzbms0ZnUyZ3djb24ifQ.Qrf-pTg9A6ETmFVJYum7BA'

    service = Directions(skey)


    s = geocoder.mapbox(start, key=pkey).json
    e = geocoder.mapbox(end, key=pkey).json

    loc1 = {'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [s['lng'], s['lat']]}}

    loc2 = {'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [e['lng'], e['lat']]}}

    t = service.directions([loc1, loc2],'mapbox.walking').geojson()['features'][0]['properties']['duration']
    return t

#print(get_distance("178 E Frambes, Columbus, OH", "90 W Maynard"))
#get_fastest_route('','','','')

def get_coords(start, end):
    pkey = 'pk.eyJ1IjoibndhbHR6IiwiYSI6ImNsOTAxNWM4ZjB1eWIzbnA4NHltNGJuYTEifQ.O-07ozUF6r4841jWpdXN9w'

    s = geocoder.mapbox(start, key=pkey).json
    e = geocoder.mapbox(end, key=pkey).json

    return s, e