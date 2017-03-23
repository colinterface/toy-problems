##########################################################
# given a pitch of a fundamental frequency in Hz         #
# and a number of semitones by which to alter the pitch  #
# calculate the resulting fundamental frequency in Hz    #
# using twelve tone equal temperament                    #
##########################################################

# save the twelfth root of two as a constant
TWELFTH_ROOT_OF_TWO = pow(2, (1 / 12.0))

def get_hz(base_hz, semitones):
    return base_hz * pow(TWELFTH_ROOT_OF_TWO, semitones)

print get_hz(440, 12) # 880.0
print get_hz(440, 1) # 466.16
print get_hz(1760, 11) # 3322.44
